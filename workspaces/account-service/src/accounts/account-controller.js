"use strict";

const csp_commons = require("@csp/commons");
const queries = require("../queries/queries");

/** Represents the class that acts as
 * a controller to aunthenticate the user.
 */
class AccountController {
  /**
   * Represents a Segment Controller Constructor.
   * @constructor
   */
  constructor(dbConfig, logger) {
    this.dbConfig = dbConfig;
    this.log = logger;
    let dbFactory = new csp_commons.DbFactory(this.log);
    this.dbAdapter = dbFactory.createDbAdapter(this.dbConfig);
    //Make sure this should be called only in when server starts
    this.dbAdapter.createConnectionPool();
  }

  /**
   *
   * @param  username
   */
  getAccountDetails(username) {
    return new Promise(async (resolve, reject) => {
      try {
        var res = await this.dbAdapter.ExecuteQuery("test");
        resolve(res);
      } catch (ex) {
        reject(ex);
      }
    });
  }
}
exports.AccountController = AccountController;
