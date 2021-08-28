const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");
const gecko = __dirname;

// Download the latest record/replay driver.
const driverFile = `${currentPlatform()}-recordreplay.${driverExtension()}`;
spawnChecked("curl", [`https://replay.io/downloads/${driverFile}`, "-o", driverFile], { stdio: "inherit" });

// Embed the driver in the source.
const driverContents = fs.readFileSync(driverFile);
fs.unlinkSync(driverFile);
let driverString = "";
for (let i = 0; i < driverContents.length; i++) {
  driverString += `\\${driverContents[i].toString(8)}`;
}
fs.writeFileSync(
  path.join(gecko, "toolkit", "recordreplay", "RecordReplayDriver.cpp"),
  `
namespace mozilla::recordreplay {
  char gRecordReplayDriver[] = "${driverString}";
  int gRecordReplayDriverSize = ${driverContents.length};
}
  `
);

const buildOptions = {
  stdio: "inherit",
  env: {
    ...process.env,
    RUSTC_BOOTSTRAP: "qcms",
    // terminal-notifier can hang, so prevent it from running.
    MOZ_NOSPAM: "1",
  },
};

if (currentPlatform() == "windows") {
  // Windows builds need to enter the mozilla-build shell, and uses separate
  // scripts for this.
  spawnChecked(".\\windows-build.bat", [], buildOptions);
} else {
  spawnChecked("./mach", ["build"], buildOptions);
  spawnChecked("./mach", ["package"], buildOptions);
}

function spawnChecked(cmd, args, options) {
  const prettyCmd = [cmd].concat(args).join(" ");
  console.error(prettyCmd);

  const rv = spawnSync(cmd, args, options);

  if (rv.status != 0 || rv.error) {
    console.error(rv.error);
    throw new Error(`Spawned process failed with exit code ${rv.status}`);
  }

  return rv;
}

function currentPlatform() {
  switch (process.platform) {
    case "darwin":
      return "macOS";
    case "linux":
      return "linux";
    case "win32":
      return "windows";
    default:
      throw new Error(`Platform ${process.platform} not supported`);
  }
}

function driverExtension() {
  return currentPlatform() == "windows" ? "dll" : "so";
}
