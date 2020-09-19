/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Logic that always runs in recording/replaying processes, and which can affect the recording.

// Create a sandbox with resources from Gecko components we need.
const sandbox = Cu.Sandbox(
  Components.Constructor("@mozilla.org/systemprincipal;1", "nsIPrincipal")(),
  {
    wantGlobalProperties: ["InspectorUtils", "CSSRule"],
  }
);
Cu.evalInSandbox(
  "Components.utils.import('resource://gre/modules/jsdebugger.jsm');" +
  "Components.utils.import('resource://gre/modules/Services.jsm');" +
  "addDebuggerToGlobal(this);",
  sandbox
);
const {
  Debugger,
  RecordReplayControl,
  Services,
} = sandbox;

// This script can be loaded into non-recording/replaying processes during automated tests.
// In non-recording/replaying processes there are no properties on RecordReplayControl.
const isRecordingOrReplaying = !!RecordReplayControl.progressCounter;

const log = RecordReplayControl.log;

const { require } = ChromeUtils.import("resource://devtools/shared/Loader.jsm");

let gWindow;
function getWindow() {
  if (!gWindow) {
    for (const w of Services.ww.getWindowEnumerator()) {
      gWindow = w;
      break;
    }
  }
  return gWindow;
}

const gDebugger = new Debugger();
const gSandboxGlobal = gDebugger.makeGlobalObjectReference(sandbox);
const gAllGlobals = [];

function considerScript(script) {
  return RecordReplayControl.shouldUpdateProgressCounter(script.url);
}

function countScriptFrames() {
  let count = 0;
  for (let frame = gDebugger.getNewestFrame(); frame; frame = frame.older) {
    if (considerScript(frame.script)) {
      count++;
    }
  }
  return count;
}

///////////////////////////////////////////////////////////////////////////////
// Utilities
///////////////////////////////////////////////////////////////////////////////

// Bidirectional map between values and numeric IDs.
function IdMap() {
  this._idMap = [undefined];
  this._objectMap = new Map();
}

IdMap.prototype = {
  add(obj) {
    if (this._objectMap.has(obj)) {
      return this._objectMap.get(obj);
    }
    const id = this._idMap.length;
    this._idMap.push(obj);
    this._objectMap.set(obj, id);
    return id;
  },

  getId(obj) {
    return this._objectMap.get(obj) || 0;
  },

  getObject(id) {
    return this._idMap[id];
  },

  map(callback) {
    const rv = [];
    for (let i = 1; i < this._idMap.length; i++) {
      rv.push(callback(i));
    }
    return rv;
  },

  forEach(callback) {
    for (let i = 1; i < this._idMap.length; i++) {
      callback(i, this._idMap[i]);
    }
  },
};

// Map from keys to arrays of values.
function ArrayMap() {
  this.map = new Map();
}

ArrayMap.prototype = {
  add(key, value) {
    if (this.map.has(key)) {
      this.map.get(key).push(value);
    } else {
      this.map.set(key, [value]);
    }
  },
};

///////////////////////////////////////////////////////////////////////////////
// Main Logic
///////////////////////////////////////////////////////////////////////////////

function CanCreateCheckpoint() {
  return countScriptFrames() == 0;
}

const gNewGlobalHooks = [];
gDebugger.onNewGlobalObject = global => {
  try {
    gDebugger.addDebuggee(global);
    gAllGlobals.push(global);
    gNewGlobalHooks.forEach(hook => hook(global));
  } catch (e) {}
};

// The UI process must wait until the content global is created here before
// URLs can be loaded.
Services.obs.addObserver(
  { observe: () => Services.cpmm.sendAsyncMessage("RecordingInitialized") },
  "content-document-global-created"
);

// Associate each Debugger.Script with a numeric ID.
const gScripts = new IdMap();

// Associate each Debugger.Source with a numeric ID.
const gSources = new IdMap();

// Map Debugger.Source to arrays of the top level scripts for that source.
const gSourceRoots = new ArrayMap();

gDebugger.onNewScript = script => {
  if (!isRecordingOrReplaying || RecordReplayControl.areThreadEventsDisallowed()) {
    return;
  }

  if (!considerScript(script)) {
    ignoreScript(script);
    return;
  }

  addScript(script);

  gSourceRoots.add(script.source, script);

  /*
  if (!gSources.getId(script.source)) {
    if (script.source.sourceMapURL &&
        Services.prefs.getBoolPref("devtools.recordreplay.uploadSourceMaps")) {
      const pid = RecordReplayControl.middlemanPid();
      const { url, sourceMapURL } = script.source;
      Services.cpmm.sendAsyncMessage(
        "RecordReplayGeneratedSourceWithSourceMap",
        { pid, url, sourceMapURL }
      );
    }
  }
  */

  const id = String(gSources.add(script.source));

  let kind = "scriptSource";
  if (script.source.introductionType == "scriptElement") {
    kind = "inlineScript";
  }

  RecordReplayControl.onScriptParsed(id, kind, script.source.url);

  function addScript(script) {
    const id = gScripts.add(script);
    script.setInstrumentationId(id);
    script.getChildScripts().forEach(addScript);
  }

  function ignoreScript(script) {
    script.setInstrumentationId(0);
    script.getChildScripts().forEach(ignoreScript);
  }
};

getWindow().docShell.watchedByDevtools = true;
Services.obs.addObserver(
  {
    observe(subject) {
      subject.QueryInterface(Ci.nsIDocShell);
      subject.watchedByDevtools = true;
    },
  },
  "webnavigation-create"
);

const gHtmlContent = new Map();

function Internal_getHTMLSource({ url }) {
  const info = gHtmlContent.get(url);
  const contents = info ? info.content : "";
  return { contents };
};

function OnHTMLContent(data) {
  const { uri, contents } = JSON.parse(data);
  if (gHtmlContent.has(uri)) {
    gHtmlContent.get(uri).content += contents;
  } else {
    gHtmlContent.set(uri, { content: contents, contentType: "text/html" });
  }
}

Services.obs.addObserver(
  {
    observe(_1, _2, data) {
      OnHTMLContent(data);
    },
  },
  "devtools-html-content"
);

Services.console.registerListener({
  observe(message) {
    if (!(message instanceof Ci.nsIScriptError)) {
      return;
    }

    advanceProgressCounter();

    if (exports.OnConsoleError) {
      exports.OnConsoleError(message);
    }
  }
});

Services.obs.addObserver({
  observe(message) {
    if (exports.OnConsoleAPICall) {
      exports.OnConsoleAPICall(message);
    }
  },
}, "console-api-log-event");

getWindow().docShell.chromeEventHandler.addEventListener(
  "DOMWindowCreated",
  () => {
    const window = getWindow();

    window.document.styleSheetChangeEventsEnabled = true;

    if (exports.OnWindowCreated) {
      exports.OnWindowCreated(window);
    }
  },
  true
);

getWindow().docShell.chromeEventHandler.addEventListener(
  "StyleSheetApplicableStateChanged",
  ({ stylesheet }) => {
    if (stylesheet.sourceMapURL &&
        Services.prefs.getBoolPref("devtools.recordreplay.uploadSourceMaps")) {
      const pid = RecordReplayControl.middlemanPid();
      Services.cpmm.sendAsyncMessage(
        "RecordReplayGeneratedSourceWithSourceMap",
        { pid, url: stylesheet.href, sourceMapURL: stylesheet.sourceMapURL }
      );
    }

    if (exports.OnStyleSheetChange) {
      exports.OnStyleSheetChange(stylesheet);
    }
  },
  true
);

function advanceProgressCounter() {
  if (!isRecordingOrReplaying) {
    return;
  }
  let progress = RecordReplayControl.progressCounter();
  RecordReplayControl.setProgressCounter(++progress);
  return progress;
}

function OnMouseEvent(time, kind, x, y) {
  advanceProgressCounter();
};

const { DebuggerNotificationObserver } = Cu.getGlobalForObject(require("resource://devtools/shared/Loader.jsm"));
const gNotificationObserver = new DebuggerNotificationObserver();
gNotificationObserver.addListener(eventListener);
gNewGlobalHooks.push(global => {
  try {
    gNotificationObserver.connect(global.unsafeDereference());
  } catch (e) {}
});

const { eventBreakpointForNotification } = require("devtools/server/actors/utils/event-breakpoints");

function eventListener(info) {
  const event = eventBreakpointForNotification(gDebugger, info);
  if (!event) {
    return;
  }
  advanceProgressCounter();

  if (exports.OnEvent) {
    exports.OnEvent(info.phase, event);
  }
}

function SendRecordingFinished(recordingId) {
  Services.cpmm.sendAsyncMessage("RecordingFinished", { recordingId });
}

function OnTestCommand(str) {
  const [_, cmd, arg] = /(.*?) (.*)/.exec(str);
  switch (cmd) {
    case "RecReplaySendAsyncMessage":
      Services.cpmm.sendAsyncMessage(arg);
      break;
    default:
      dump(`Unrecognized Test Command ${cmd}\n`);
      break;
  }
}

function Pause_getAllFrames() {
  // FIXME
  return {};
}

const commands = {
  "Pause.getAllFrames": Pause_getAllFrames,
  "Debugger.getPossibleBreakpoints": Debugger_getPossibleBreakpoints,
  "Debugger.getScriptSource": Debugger_getScriptSource,
  "Internal.convertLocationToFunctionOffset": Internal_convertLocationToFunctionOffset,
  "Internal.getHTMLSource": Internal_getHTMLSource,
};

function OnProtocolCommand(method, params) {
  log(`OnProtocolCommand ${method} ${JSON.stringify(params)}`);
  if (commands[method]) {
    try {
      return commands[method](params);
    } catch (e) {
      log(`Error: Exception processing command ${method}: ${e}`);
      return null;
    }
  }
  log(`Error: Unsupported command ${method}`);
}

const exports = {
  CanCreateCheckpoint,
  OnMouseEvent,
  SendRecordingFinished,
  OnTestCommand,
  OnProtocolCommand,
};

function Initialize() {
  return exports;
}

var EXPORTED_SYMBOLS = ["Initialize"];

///////////////////////////////////////////////////////////////////////////////
// Debugger Commands
///////////////////////////////////////////////////////////////////////////////

// Invoke callback on an overapproximation of all scripts in a source
// between begin and end.
function forMatchingScripts(source, begin, end, callback) {
  const roots = gSourceRoots.map.get(source);
  if (roots) {
    processScripts(roots);
  }

  // Whether script overaps with the selected range.
  function scriptMatches(script) {
    let lineCount;
    try {
      lineCount = script.lineCount;
    } catch (e) {
      // Watch for optimized out scripts.
      return false;
    }

    if (end) {
      const startPos = { line: script.startLine, column: script.startColumn };
      if (positionPrecedes(end, startPos)) {
        return false;
      }
    }

    if (begin) {
      const endPos = {
        line: script.startLine + lineCount - 1,

        // There is no endColumn accessor, so we can only compute this accurately
        // if the script is on a single line.
        column: (lineCount == 1) ? script.startColumn + script.sourceLength : 1e9,
      };
      if (positionPrecedes(endPos, begin)) {
        return false;
      }
    }

    return true;
  }

  function processScripts(scripts) {
    for (const script of scripts) {
      if (scriptMatches(script)) {
        callback(script);
        processScripts(script.getChildScripts());
      }
    }
  }

  function positionPrecedes(posA, posB) {
    return posA.line < posB.line || posA.line == posB.line && posA.column < posB.column;
  }
}

// Invoke callback all positions in a source between begin and end (inclusive / optional).
function forMatchingBreakpointPositions(source, begin, end, callback) {
  forMatchingScripts(source, begin, end, script => {
    script.getPossibleBreakpoints().forEach(({ offset, lineNumber, columnNumber }, i) => {
      if (positionMatches(lineNumber, columnNumber)) {
        callback(script, offset, lineNumber, columnNumber);
      } else if (i == 0 && positionMatches(script.startLine, script.startColumn)) {
        // The start location of the script is considered to match the first
        // breakpoint position. This allows setting breakpoints or analyses by
        // using the function location provided in the protocol, instead of
        // requiring the client to find the exact breakpoint position.
        callback(script, offset, lineNumber, columnNumber);
      }
    });
  });

  // Whether line/column are in the range described by begin/end.
  function positionMatches(line, column) {
    if (begin && positionPrecedes({ line, column }, begin)) {
      return false;
    }
    if (end && positionPrecedes(end, { line, column })) {
      return false;
    }
    return true;
  }
}

function scriptIdToSource(scriptId) {
  return gSources.getObject(Number(scriptId));
}

// Map breakpoint locations we've generated to function/offset information.
const gBreakpointLocations = new Map();

function breakpointLocationKey({ scriptId, line, column }) {
  return `${scriptId}:${line}:${column}`;
}

function Debugger_getPossibleBreakpoints({ scriptId, begin, end}) {
  const source = scriptIdToSource(scriptId);

  const lineLocations = new ArrayMap();
  forMatchingBreakpointPositions(source, begin, end, (script, offset, line, column) => {
    const functionId = String(gScripts.getId(script));
    gBreakpointLocations.set(
      breakpointLocationKey({ scriptId, line, column }),
      { functionId, offset }
    );
    lineLocations.add(line, column);
  });

  return { lineLocations: finishLineLocations(lineLocations) };

  // Convert a line => columns ArrayMap into a lineLocations WRP object.
  function finishLineLocations(lineLocations) {
    return [...lineLocations.map.entries()].map(([line, columns]) => {
      return { line, columns };
    });
  }
}

function Internal_convertLocationToFunctionOffset({ location }) {
  return gBreakpointLocations.get(breakpointLocationKey(location));
}

function Debugger_getScriptSource({ scriptId }) {
  const source = scriptIdToSource(scriptId);

  let scriptSource = source.text;
  if (source.startLine > 1) {
    scriptSource = "\n".repeat(source.startLine - 1) + scriptSource;
  }

  return {
    scriptSource,
    contentType: "text/javascript",
  };
}
