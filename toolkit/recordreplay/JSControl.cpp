/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*-
 * vim: set ts=8 sts=2 et sw=2 tw=80:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "JSControl.h"
#include "ProcessRecordReplay.h"

#include "mozilla/Base64.h"
#include "mozilla/ClearOnShutdown.h"
#include "mozilla/StaticPtr.h"
#include "js/CharacterEncoding.h"
#include "js/Conversions.h"
#include "js/JSON.h"
#include "js/PropertySpec.h"
#include "nsImportModule.h"
#include "rrIConnection.h"
#include "rrIModule.h"
#include "xpcprivate.h"
#include "nsMediaFeatures.h"

#include <fcntl.h>
#include <sys/stat.h>
#include <unistd.h>

using namespace JS;

namespace mozilla {
namespace recordreplay {
namespace js {

// URL of the root module script.
#define ModuleURL "resource://devtools/server/actors/replay/module.js"

static StaticRefPtr<rrIModule> gModule;
static PersistentRootedObject* gModuleObject;

static bool IsInitialized() {
  return !!gModule;
}

void EnsureInitialized() {
  if (IsInitialized()) {
    return;
  }

  // Initialization so we can repaint at the first checkpoint without having
  // an unhandled recording divergence.
  nsMediaFeatures::InitSystemMetrics();

  AutoSafeJSContext cx;
  JSAutoRealm ar(cx, xpc::PrivilegedJunkScope());

  nsCOMPtr<rrIModule> module = do_ImportModule(ModuleURL);
  gModule = module.forget();
  ClearOnShutdown(&gModule);

  RootedValue value(cx);
  if (NS_FAILED(gModule->Initialize(&value))) {
    MOZ_CRASH("EnsureInitialized: Initialize failed");
  }
  MOZ_RELEASE_ASSERT(value.isObject());

  gModuleObject = new PersistentRootedObject(cx);
  *gModuleObject = &value.toObject();
}

void ConvertJSStringToCString(JSContext* aCx, JSString* aString,
                              nsAutoCString& aResult) {
  size_t len = JS_GetStringLength(aString);

  nsAutoString chars;
  chars.SetLength(len);
  if (!JS_CopyStringChars(aCx, Range<char16_t>(chars.BeginWriting(), len),
                          aString)) {
    MOZ_CRASH("ConvertJSStringToCString");
  }

  NS_ConvertUTF16toUTF8 utf8(chars);
  aResult = utf8;
}

extern "C" {

MOZ_EXPORT bool RecordReplayInterface_ShouldUpdateProgressCounter(
    const char* aURL) {
  // Progress counters are only updated for scripts which are exposed to the
  // debugger.
  return aURL && strncmp(aURL, "resource:", 9) && strncmp(aURL, "chrome:", 7);
}

}  // extern "C"

extern "C" {

MOZ_EXPORT ProgressCounter RecordReplayInterface_NewTimeWarpTarget() {
  if (AreThreadEventsDisallowed()) {
    return 0;
  }

  // NewTimeWarpTarget() must be called at consistent points between recording
  // and replaying.
  RecordReplayAssert("NewTimeWarpTarget");

  if (!IsInitialized() || IsRecording()) {
    return 0;
  }

  // FIXME
  return 0;

  /*
  AutoDisallowThreadEvents disallow;
  AutoSafeJSContext cx;
  JSAutoRealm ar(cx, xpc::PrivilegedJunkScope());

  RootedValue rv(cx);
  if (!JS_CallFunctionName(cx, *gModuleObject, "NewTimeWarpTarget", HandleValueArray::empty(), &rv)) {
    MOZ_CRASH("NewTimeWarpTarget");
  }

  MOZ_RELEASE_ASSERT(rv.isNumber());
  return rv.toNumber();
  */
}

}  // extern "C"

void OnTestCommand(const char* aString) {
  // Ignore commands to finish the current test if we aren't recording/replaying.
  if (!strcmp(aString, "RecReplaySendAsyncMessage RecordingFinished") &&
      !IsRecordingOrReplaying()) {
    return;
  }

  EnsureInitialized();

  AutoSafeJSContext cx;
  JSAutoRealm ar(cx, xpc::PrivilegedJunkScope());

  JSString* str = JS_NewStringCopyZ(cx, aString);
  MOZ_RELEASE_ASSERT(str);

  JS::AutoValueArray<1> args(cx);
  args[0].setString(str);

  RootedValue rv(cx);
  if (!JS_CallFunctionName(cx, *gModuleObject, "OnTestCommand", args, &rv)) {
    MOZ_CRASH("OnTestCommand");
  }
}

extern "C" {

MOZ_EXPORT void RecordReplayInterface_BeginContentParse(
    const void* aToken, const char* aURL, const char* aContentType) {
  MOZ_RELEASE_ASSERT(IsRecordingOrReplaying());
  MOZ_RELEASE_ASSERT(aToken);
}

MOZ_EXPORT void RecordReplayInterface_AddContentParseData8(
    const void* aToken, const Utf8Unit* aUtf8Buffer, size_t aLength) {
  MOZ_RELEASE_ASSERT(IsRecordingOrReplaying());
  MOZ_RELEASE_ASSERT(aToken);
}

MOZ_EXPORT void RecordReplayInterface_AddContentParseData16(
    const void* aToken, const char16_t* aBuffer, size_t aLength) {
  MOZ_RELEASE_ASSERT(IsRecordingOrReplaying());
  MOZ_RELEASE_ASSERT(aToken);
}

MOZ_EXPORT void RecordReplayInterface_EndContentParse(const void* aToken) {
  MOZ_RELEASE_ASSERT(IsRecordingOrReplaying());
  MOZ_RELEASE_ASSERT(aToken);
}

}  // extern "C"

void SendRecordingFinished(const char* aRecordingId) {
  MOZ_RELEASE_ASSERT(IsInitialized());

  AutoSafeJSContext cx;
  JSAutoRealm ar(cx, xpc::PrivilegedJunkScope());

  JSString* str = JS_NewStringCopyZ(cx, aRecordingId);
  MOZ_RELEASE_ASSERT(str);

  JS::AutoValueArray<1> args(cx);
  args[0].setString(str);

  RootedValue rv(cx);
  if (!JS_CallFunctionName(cx, *gModuleObject, "SendRecordingFinished", args, &rv)) {
    MOZ_CRASH("SendRecordingFinished");
  }
}

///////////////////////////////////////////////////////////////////////////////
// Module Interface
///////////////////////////////////////////////////////////////////////////////

// Define the methods which the module uses to interact with the recording driver.

static bool Method_Log(JSContext* aCx, unsigned aArgc, Value* aVp) {
  CallArgs args = CallArgsFromVp(aArgc, aVp);

  RootedString str(aCx, ToString(aCx, args.get(0)));
  if (!str) {
    return false;
  }

  JS::UniqueChars cstr = JS_EncodeStringToLatin1(aCx, str);
  if (!cstr) {
    return false;
  }

  PrintLog(cstr.get());

  args.rval().setUndefined();
  return true;
}

static bool Method_OnScriptParsed(JSContext* aCx, unsigned aArgc,
                                  Value* aVp) {
  CallArgs args = CallArgsFromVp(aArgc, aVp);

  if (!args.get(0).isString() ||
      !args.get(1).isString() ||
      !args.get(2).isString()) {
    JS_ReportErrorASCII(aCx, "Bad arguments");
    return false;
  }

  nsAutoCString id, kind, url;
  ConvertJSStringToCString(aCx, args.get(0).toString(), id);
  ConvertJSStringToCString(aCx, args.get(1).toString(), kind);
  ConvertJSStringToCString(aCx, args.get(2).toString(), url);
  OnScriptParsed(id.get(), kind.get(), url.get());

  args.rval().setUndefined();
  return true;
}

static bool Method_AreThreadEventsDisallowed(JSContext* aCx,
                                             unsigned aArgc, Value* aVp) {
  CallArgs args = CallArgsFromVp(aArgc, aVp);
  args.rval().setBoolean(AreThreadEventsDisallowed());
  return true;
}

static bool Method_ProgressCounter(JSContext* aCx, unsigned aArgc,
                                         Value* aVp) {
  CallArgs args = CallArgsFromVp(aArgc, aVp);
  args.rval().setNumber((double)*ExecutionProgressCounter());
  return true;
}

static bool Method_SetProgressCounter(JSContext* aCx, unsigned aArgc,
                                      Value* aVp) {
  CallArgs args = CallArgsFromVp(aArgc, aVp);

  if (!args.get(0).isNumber()) {
    JS_ReportErrorASCII(aCx, "Expected numeric argument");
    return false;
  }

  *ExecutionProgressCounter() = args.get(0).toNumber();

  args.rval().setUndefined();
  return true;
}

static bool Method_ShouldUpdateProgressCounter(JSContext* aCx,
                                               unsigned aArgc, Value* aVp) {
  CallArgs args = CallArgsFromVp(aArgc, aVp);

  if (args.get(0).isNull()) {
    args.rval().setBoolean(ShouldUpdateProgressCounter(nullptr));
  } else {
    if (!args.get(0).isString()) {
      JS_ReportErrorASCII(aCx, "Expected string or null as first argument");
      return false;
    }

    nsAutoCString str;
    ConvertJSStringToCString(aCx, args.get(0).toString(), str);
    args.rval().setBoolean(ShouldUpdateProgressCounter(str.get()));
  }

  return true;
}

static bool gScanningScripts;

// This is called by the recording driver to notify us when to start/stop scanning.
void SetScanningScriptsCallback(bool aValue) {
  MOZ_RELEASE_ASSERT(IsInitialized());

  if (gScanningScripts == aValue) {
    return;
  }
  gScanningScripts = aValue;

  AutoSafeJSContext cx;
  JSAutoRealm ar(cx, xpc::PrivilegedJunkScope());

  JS::AutoValueArray<1> args(cx);
  args[0].setBoolean(aValue);

  RootedValue rv(cx);
  if (!JS_CallFunctionName(cx, *js::gModuleObject, "SetScanningScripts", args, &rv)) {
    MOZ_CRASH("SetScanningScripts");
  }
}

static bool Method_InstrumentationCallback(JSContext* aCx, unsigned aArgc,
                                           Value* aVp) {
  CallArgs args = CallArgsFromVp(aArgc, aVp);

  PrintLog("InstrumentationCallback");

  args.rval().setUndefined();
  return true;
}

static bool Method_IsScanningScripts(JSContext* aCx, unsigned aArgc,
                                     Value* aVp) {
  CallArgs args = CallArgsFromVp(aArgc, aVp);

  args.rval().setBoolean(gScanningScripts);
  return true;
}

static const JSFunctionSpec gRecordReplayMethods[] = {
  JS_FN("log", Method_Log, 1, 0),
  JS_FN("onScriptParsed", Method_OnScriptParsed, 3, 0),
  JS_FN("areThreadEventsDisallowed", Method_AreThreadEventsDisallowed, 0, 0),
  JS_FN("progressCounter", Method_ProgressCounter, 0, 0),
  JS_FN("setProgressCounter", Method_SetProgressCounter, 1, 0),
  JS_FN("shouldUpdateProgressCounter", Method_ShouldUpdateProgressCounter, 1, 0),
  JS_FN("instrumentationCallback", Method_InstrumentationCallback, 3, 0),
  JS_FN("isScanningScripts", Method_IsScanningScripts, 0, 0),
  JS_FS_END
};

static bool FillStringCallback(const char16_t* buf, uint32_t len, void* data) {
  nsCString* str = (nsCString*)data;
  MOZ_RELEASE_ASSERT(str->Length() == 0);
  *str = NS_ConvertUTF16toUTF8(buf, len);
  return true;
}

char* CommandCallback(const char* aMethod, const char* aParams) {
  MOZ_RELEASE_ASSERT(js::IsInitialized());

  AutoSafeJSContext cx;
  JSAutoRealm ar(cx, xpc::PrivilegedJunkScope());

  RootedString method(cx, JS_NewStringCopyZ(cx, aMethod));
  RootedString paramsStr(cx, JS_NewStringCopyZ(cx, aParams));
  MOZ_RELEASE_ASSERT(method && paramsStr);

  RootedValue params(cx);
  if (!JS_ParseJSON(cx, paramsStr, &params)) {
    PrintLog("Error: CommandCallback ParseJSON failed %s %s", aMethod, aParams);
    MOZ_CRASH("CommandCallback");
  }

  JS::AutoValueArray<2> args(cx);
  args[0].setString(method);
  args[1].set(params);

  RootedValue rv(cx);
  if (!JS_CallFunctionName(cx, *js::gModuleObject, "OnProtocolCommand", args, &rv)) {
    PrintLog("Error: CommandCallback failed %s", aMethod);
    MOZ_CRASH("CommandCallback");
  }

  if (!rv.isObject()) {
    PrintLog("Error: CommandCallback result must be an object %s", aMethod);
    MOZ_CRASH("CommandCallback");
  }

  RootedObject obj(cx, &rv.toObject());

  nsCString str;
  if (!JS::ToJSONMaybeSafely(cx, obj, FillStringCallback, &str)) {
    PrintLog("Error: CommandCallback ToJSON failed");
    MOZ_CRASH("CommandCallback");
  }

  return strdup(str.get());
}

}  // namespace js

///////////////////////////////////////////////////////////////////////////////
// Plumbing
///////////////////////////////////////////////////////////////////////////////

bool DefineRecordReplayControlObject(JSContext* aCx, JS::HandleObject object) {
  MOZ_RELEASE_ASSERT(IsRecordingOrReplaying());

  RootedObject staticObject(aCx, JS_NewObject(aCx, nullptr));
  if (!staticObject ||
      !JS_DefineProperty(aCx, object, "RecordReplayControl", staticObject, 0)) {
    return false;
  }

  if (js::gModuleObject) {
    // RecordReplayControl objects created while setting up the module itself
    // don't get references to the module.
    RootedObject obj(aCx, *js::gModuleObject);
    if (!JS_WrapObject(aCx, &obj) ||
        !JS_DefineProperty(aCx, staticObject, "module", obj, 0)) {
      return false;
    }
  }

  if (!JS_DefineFunctions(aCx, staticObject, js::gRecordReplayMethods)) {
    return false;
  }

  return true;
}

static bool StatusCallback(JSContext* aCx, unsigned aArgc, JS::Value* aVp);

static const JSFunctionSpec gCallbacks[] = {
  JS_FN("updateStatus", StatusCallback, 1, 0),
  JS_FS_END
};

static bool gUIStateInitialized;
static StaticRefPtr<rrIConnection> gConnection;
static nsString gCloudReplayStatus;

void EnsureUIStateInitialized() {
  if (gUIStateInitialized) {
    return;
  }
  gUIStateInitialized = true;
  MOZ_RELEASE_ASSERT(!gConnection);

  nsCOMPtr<rrIConnection> connection =
    do_ImportModule("resource://devtools/server/actors/replay/connection.js");
  gConnection = connection.forget();
  ClearOnShutdown(&gConnection);

  AutoSafeJSContext cx;
  JSAutoRealm ar(cx, xpc::PrivilegedJunkScope());

  JS::RootedObject callbacks(cx, JS_NewObject(cx, nullptr));
  MOZ_RELEASE_ASSERT(callbacks);

  if (!JS_DefineFunctions(cx, callbacks, gCallbacks)) {
    MOZ_CRASH("EnsureUIStateInitialized");
  }

  JS::RootedValue callbacksValue(cx, JS::ObjectValue(*callbacks));
  if (NS_FAILED(gConnection->Initialize(callbacksValue))) {
    MOZ_CRASH("EnsureUIStateInitialized");
  }

  gCloudReplayStatus.AssignLiteral("cloudConnecting.label");
}

static JS::PersistentRootedObject* gStatusCallback;

void SetCloudReplayStatusCallback(JS::HandleValue aCallback) {
  AutoSafeJSContext cx;

  if (!gStatusCallback) {
    gStatusCallback = new JS::PersistentRootedObject(cx);
  }

  *gStatusCallback = aCallback.isObject() ? &aCallback.toObject() : nullptr;
}

static bool StatusCallback(JSContext* aCx, unsigned aArgc, JS::Value* aVp) {
  JS::CallArgs args = CallArgsFromVp(aArgc, aVp);

  if (!args.get(0).isString()) {
    JS_ReportErrorASCII(aCx, "Expected string");
    return false;
  }

  nsAutoCString status;
  js::ConvertJSStringToCString(aCx, args.get(0).toString(), status);
  gCloudReplayStatus = NS_ConvertUTF8toUTF16(status);

  if (gStatusCallback && *gStatusCallback) {
    JSAutoRealm ar(aCx, *gStatusCallback);

    JS::AutoValueArray<3> newArgs(aCx);
    newArgs[0].set(args.get(0));
    newArgs[1].set(args.get(1));
    newArgs[2].set(args.get(2));

    JS_WrapValue(aCx, newArgs[0]);
    JS_WrapValue(aCx, newArgs[1]);
    JS_WrapValue(aCx, newArgs[2]);

    JS::RootedObject thisv(aCx);
    JS::RootedValue fval(aCx, JS::ObjectValue(**gStatusCallback));
    JS::RootedValue rv(aCx);
    if (!JS_CallFunctionValue(aCx, thisv, fval, newArgs, &rv)) {
      return false;
    }
  }

  args.rval().setUndefined();
  return true;
}

void GetCloudReplayStatus(nsAString& aResult) {
  aResult = gCloudReplayStatus;
}

}  // namespace recordreplay
}  // namespace mozilla
