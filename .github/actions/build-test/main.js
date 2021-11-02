
const {
  getLatestReplayRevision,
  getLatestPlaywrightRevision,
  sendBuildTestRequest,
  spawnChecked,
  newTask,
} = require("../utils");

const replayRevision = getLatestReplayRevision();
const playwrightRevision = getLatestPlaywrightRevision();

sendBuildTestRequest({
  name: `Gecko Build/Test ${replayRevision}`,
  tasks: [
    ...platformTasks("macOS"),
    ...platformTasks("linux"),
    ...platformTasks("windows"),
  ],
});

function platformTasks(platform) {
  const buildReplayTask = newTask(
    `Build Gecko ${platform}`,
    {
      kind: "BuildRuntime",
      runtime: "gecko",
      revision: replayRevision,
    },
    platform
  );

  const testReplayTask = newTask(
    `Run Tests ${platform}`,
    {
      kind: "StaticLiveTests",
      runtime: "gecko",
      revision: replayRevision,
    },
    platform,
    [buildReplayTask]
  );

  const buildPlaywrightTask = newTask(
    `Build Gecko/Playwright ${platform}`,
    {
      kind: "BuildRuntime",
      runtime: "geckoPlaywright",
      revision: playwrightRevision,
    },
    platform
  );

  const testPlaywrightTask = newTask(
    `Test Gecko/Playwright ${platform}`,
    {
      kind: "PlaywrightLiveTests",
      runtime: "geckoPlaywright",
      revision: playwrightRevision,
    },
    platform,
    [buildPlaywrightTask]
  );

  return [
    buildReplayTask,
    testReplayTask,
    buildPlaywrightTask,
    testPlaywrightTask
  ];
}
