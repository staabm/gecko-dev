
const {
  getLatestReplayRevision,
  sendBuildTestRequest,
  spawnChecked,
  newTask,
} = require("../utils");

const branchName = getBranchName(process.env.GITHUB_REF);
console.log("BranchName", branchName);

if (branchName.includes("webreplay-release")) {
  console.error("Use build/test action for release branch");
  process.exit(1);
}

const replayRevision = getLatestReplayRevision();

sendBuildTestRequest({
  name: `Gecko Build/Test Branch ${branchName} ${replayRevision}`,
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
      branch: branchName,
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

  return [buildReplayTask, testReplayTask];
}

function getBranchName(refName) {
  // Strip everything after the last "/" from the ref to get the branch name.
  const index = refName.lastIndexOf("/");
  if (index == -1) {
    return refName;
  }
  return refName.substring(index + 1);
}
