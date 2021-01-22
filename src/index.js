"use strict";

const core = require("@actions/core");
const main = require("./main");

const outputs = main({
  body: core.getInput("body"),
  slug: core.getInput("selfSlug"),
});
for (const { key, value } of outputs) {
  core.setOutput(key, value.join(","));
}
