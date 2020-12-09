"use strict";

const routesgateway = require("./routesgateway");
/**
 * Holds the init function that initializes the routes
 * gateway.
 * @param app
 * @param dbconfig
 * @param log
 */
function init(app, dbconfig, log) {
  return routesgateway.default(app, dbconfig, log);
}
exports.init = init;
