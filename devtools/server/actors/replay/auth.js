/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
/* eslint-disable spaced-comment, brace-style, indent-legacy, no-shadow */

"use strict";

var EXPORTED_SYMBOLS = [
  "hasOriginalApiKey",
  "getOriginalApiKey",
  "setReplayUserToken",
  "getReplayUserToken",
  "tokenInfo",
  "tokenExpiration"
];

const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

const Env = Cc["@mozilla.org/process/environment;1"].getService(
  Ci.nsIEnvironment
);

const gOriginalApiKey = Env.get("RECORD_REPLAY_API_KEY");
function hasOriginalApiKey() {
  return !!gOriginalApiKey;
}
function getOriginalApiKey() {
  return gOriginalApiKey;
}

function setReplayUserToken(token) {
  Services.prefs.setStringPref("devtools.recordreplay.user-token", token || "");
}
function getReplayUserToken() {
  return Services.prefs.getStringPref("devtools.recordreplay.user-token");
}

function tokenInfo(token) {
  const [_header, encPayload, _cypher] = token.split(".", 3);
  if (typeof encPayload !== "string") {
    return null;
  }

  let payload;
  try {
    const decPayload = ChromeUtils.base64URLDecode(encPayload, {
      padding: "reject"
    });
    payload = JSON.parse(new TextDecoder().decode(decPayload));
  } catch (err) {
    return null;
  }

  if (typeof payload !== "object") {
    return null;
  }

  return { payload };
}

function tokenExpiration(token) {
  const userInfo = tokenInfo(token);
  if (!userInfo) {
    return null;
  }
  const exp = userInfo.payload?.exp;
  return typeof exp === "number" ? exp * 1000 : null;
}