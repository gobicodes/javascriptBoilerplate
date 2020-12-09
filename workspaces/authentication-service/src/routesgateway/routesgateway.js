"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = require("../authenticate");
/**
 * Function that act as a fascade for multiple routes
 * based on their functionality.
 * @param app - holds the express application.
 * @param dbConfig - holds the db configuration.
 * @param log - holds the cps logger.
 */
function init(app, dbConfig, log) {
  log.debug("Entering RoutesGateway");
  /** Initializing all the controller here
   * If you are adding new controller it has to be
   * registered here.
   */
  log.debug("Exiting RoutesGateway");
  return auth.init(app, dbConfig, log);
}
exports.default = init;
