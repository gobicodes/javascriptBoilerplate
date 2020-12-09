"use strict";
const server = require("./server");
const status = server.default();
if (!status) {
  console.log("Error in Starting Login Service");
}
