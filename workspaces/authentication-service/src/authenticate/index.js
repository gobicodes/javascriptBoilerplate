"use strict";

const routes = require("./routes");
/** Default Init function for the API's related to Segments */
function init(app, dbconfig, log) {
  return routes.default(app, dbconfig, log);
}
exports.init = init;
