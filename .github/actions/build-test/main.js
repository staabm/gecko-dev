const http = require("http");
const https = require("https");
const { spawnSync } = require("child_process");

const gecko = `${__dirname}/../../..`;
const revision = getLatestRevision();

sendBuildTestRequest({
  name: `Gecko Build/Test ${revision}`,
  tasks: [
    {
      id: 0,
      name: "Build Gecko macOS",
      task: {
        kind: "BuildRuntime",
        runtime: "gecko",
        revision,
      },
      platform: "macOS",
      dependencies: [],
    },
    {
      id: 1,
      name: "Run Tests macOS",
      task: {
        kind: "StaticLiveTests",
        runtime: "gecko",
        revision,
      },
      platform: "macOS",
      dependencies: [0],
    },
  ],
});

function getLatestRevision() {
  const revision = spawnChecked("git", ["rev-parse", "--short", "HEAD"], { cwd: gecko })
    .stdout.toString()
    .trim();
}

function sendBuildTestRequest(contents) {
  const text = JSON.stringify(contents);

  const headers = {
    "Content-Type": "application/json",
    "Content-Length": text.length,
    Authorization: process.env.BUILD_TEST_AUTHORIZATION,
  };

  // Allow overriding the build/test connection info for testing.
  const options = {
    hostname: process.env.BUILD_TEST_HOSTNAME || "build-test.replay.io",
    port: process.env.BUILD_TEST_PORT || 443,
    path: "/",
    method: "POST",
    headers,
  };

  const request = (process.env.BUILD_TEST_INSECURE ? http : https).request(
    options,
    () => {}
  );
  request.on("error", e => {
    throw new Error(`Error contacting build/test server: ${e}`);
  });
  request.write(text);
  request.end();
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
