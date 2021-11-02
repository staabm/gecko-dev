const http = require("http");
const https = require("https");
const { spawnSync } = require("child_process");

const {
  getLatestReplayRevision,
  sendBuildTestRequest,
  spawnChecked,
  newTask,
} = require("../utils");

const gecko = `${__dirname}/../../..`;
const replayRevision = getLatestReplayRevision();
const playwrightRevision = getLatestPlaywrightRevision();

sendBuildTestRequest({
  name: `Gecko Release ${revision}`,
  tasks: [
    ...platformTasks("macOS"),
    ...platformTasks("linux"),
    ...platformTasks("windows"),
  ],
});

function platformTasks(platform) {
  const releaseReplayTask = newTask(
    `Release Gecko ${platform}`,
    {
      kind: "ReleaseRuntime",
      runtime: "gecko",
      revision: replayRevision,
    },
    platform
  );

  const releasePlaywrightTask = newTask(
    `Release Playwright ${platform}`,
    {
      kind: "ReleaseRuntime",
      runtime: "geckoPlaywright",
      revision: replayRevision,
    },
    platform
  );

  return [releaseReplayTask, releasePlaywrightTask];
}
