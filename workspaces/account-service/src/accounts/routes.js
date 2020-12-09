"use strict";

const express = require("express");
const account_controller = require("./account-controller");
/**
 * Represent the function that holds all the routes
 * @param app - that holds the expression application to append the routes
 * @param dbConfig - that holds the db configuration details.
 * @param log - that holds the logger porxy
 */
function accountsRouter(app, dbConfig, log) {
  return new Promise((resolve, reject) => {
    log.debug("Entering Register Routes - Login");
    const router = express.Router();
    log.debug(dbConfig);
    let accountController = new account_controller.AccountController(
      dbConfig,
      log
    );
    router.get("/test", async (req, res, next) => {
      try {
        log.debug("Entering validateuser API method");
        let response = await accountController
          .getAccountDetails(req.body.user_name, req.body.password, req)
          .catch(x => log.debug("Error in validateuser", x));
        log.debug("Exiting API - validateuser");
        res.send(response);
      } catch (ex) {
        log.error(ex);
        log.debug("Exiting Register Routes on error- validateuser");
        res.send("Error Occured - " + ex);
      }
    });

    app.use("/api", router);
    app.get("/", (req, res) => res.send("Hello ! Account service is up"));
    log.debug("Exiting Register Routes - Account");
    resolve(app);
  });
}
exports.default = accountsRouter;
