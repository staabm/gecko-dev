var EXPORTED_SYMBOLS = ["pingTelemetry"];

const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");
const ReplayAuth = ChromeUtils.import(
  "resource://devtools/server/actors/replay/auth.js"
);

function pingTelemetry(source, name, data) {
  const url = Services.prefs.getStringPref("replay.telemetry.url");
  const enabled = Services.prefs.getBoolPref("replay.telemetry.enabled");

  if (!enabled || !url) return;

  // fetch the user info to send in the `browserUser` field.
  let browserUser = "unknown";
  if (ReplayAuth.hasOriginalApiKey()) {
    browserUser = "fixed-api-key";
  } else {
    const token = ReplayAuth.getReplayUserToken();
    const tokenInfo = token ? ReplayAuth.tokenInfo(token) : null;
    if (tokenInfo) {
      browserUser = tokenInfo.payload.sub || "no-user-field";
    } else if (token) {
      browserUser = "invalid-json";
    } else {
      browserUser = "no-user-token";
    }
  }

  // Collect info to send for `browserSettings` field.
  const usePreallocated = Services.prefs.getBoolPref("devtools.recordreplay.usePreallocated");
  const browserSettings = { usePreallocated };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      ...data,
      event: 'Gecko',
      build: Services.appinfo.appBuildID,
      ts: Date.now(),
      source,
      name,
      browserUser,
      browserSettings,
    })
  }).catch(console.error);
}