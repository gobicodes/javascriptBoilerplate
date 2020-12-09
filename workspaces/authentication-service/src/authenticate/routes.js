"use strict";

const express = require("express");
const auth_Controller = require("./auth-controller");
/**
 * Represent the function that holds all the routes
 * @param app - that holds the expression application to append the routes
 * @param dbConfig - that holds the db configuration details.
 * @param log - that holds the logger porxy
 */
function authenticateRouter(app, dbConfig, log) {
  return new Promise((resolve, reject) => {
    log.debug("Entering Register Routes - Login");
    const router = express.Router();
    let authController = new auth_Controller.AuthController(dbConfig, log);
    router.post("/login", async (req, res, next) => {
      try {
        log.debug("Entering validateuser API method");
        let response = await authController
          .validateUser(req.body.user_name, req.body.password, req)
          .catch(x => log.debug("Error in validateuser", x));
        log.debug("Exiting API - validateuser");
        res.send(response);
      } catch (ex) {
        log.error(ex);
        log.debug("Exiting Register Routes on error- validateuser");
        res.send("Error Occured - " + ex);
      }
    });
    router.get("/test", async (req, res, next) => {
      try {
        log.debug("Entering validateuser API method");
        let response = await authController
          .validateUser(req.body.user_name, req.body.password, req)
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
    app.get("/", (req, res) =>
      res.send("Hello ! Authentication service is up")
    );
    log.debug("Exiting Register Routes - validateuser");
    resolve(app);
  });
}
exports.default = authenticateRouter;
