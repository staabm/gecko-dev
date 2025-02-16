/* Any copyright is dedicated to the Public Domain.
   http://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const { ExperimentStore } = ChromeUtils.import(
  "resource://messaging-system/experiments/ExperimentStore.jsm"
);
ChromeUtils.defineModuleGetter(
  this,
  "JSONFile",
  "resource://gre/modules/JSONFile.jsm"
);

function getPath() {
  const profileDir = Services.dirsvc.get("ProfD", Ci.nsIFile).path;
  // NOTE: If this test is failing because you have updated this path in `ExperimentStore`,
  // users will lose their old experiment data. You should do something to migrate that data.
  return PathUtils.join(profileDir, "ExperimentStoreData.json");
}

// Ensure that data persisted to disk is succesfully loaded by the store.
// We write data to the expected location in the user profile and
// instantiate an ExperimentStore that should then see the value.
add_task(async function test_loadFromFile() {
  const previousSession = new JSONFile({ path: getPath() });
  await previousSession.load();
  previousSession.data.test = true;
  previousSession.saveSoon();
  await previousSession.finalize();

  // Create a store and expect to load data from previous session
  const store = new ExperimentStore();
  await store.init();

  Assert.ok(
    store.get("test"),
    "This should pass if the correct store path loaded successfully"
  );
});
