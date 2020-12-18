"use strict";
const server = require("./server");

/**
 * Represents the main entry point of this service
 */
const status = server.default();
if (!status) {
  console.log("Error in Starting Login Service");
}
