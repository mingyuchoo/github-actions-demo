const { TestScheduler } = require("jest");
var newman = require("newman");
var server = require("../../src/server");

newman
  .run({
    collection: require("./sample-collection.json"),
    reporters: "cli",
  })
  .on("start", function (err, args) {
    console.log(">>> running a collection");
  })
  .on("done", function (err, summary) {
    console.log(">>> done");
    server.close();
  });
