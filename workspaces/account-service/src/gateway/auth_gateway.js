"use strict";

const express = require("express");
const JWT = require("jsonwebtoken");
const R = require("ramda");
function authorizeUser(app, log) {
  return new Promise((resolve, reject) => {
    log.debug("Entering Auth Gateway");
    var globalrouter = express.Router();
    // a middleware function with no mount path. This code is executed for every request to the router
    globalrouter.use(function(req, res, next) {
      log.debug("Entering Auth Gateway middleware");
      if (
        req &&
        (req.url == "/api/login" ||
          req.url == "/api/logout/" ||
          !R.contains("api", req.url))
      ) {
        next();
        return;
      }
      log.debug("Validating token - Auth Gateway" + req);
      if (!req.headers && !req.headers["x-access-token"]) {
        return res.status(403).send({
          success: false,
          message: "Need valid token in headers to authenticate failed"
        });
      }
      // check header or url parameters or post parameters for token
      var token = req.headers["x-access-token"];
      log.debug("Token is", token);
      if (!token) {
      }
      // decode token
      if (token) {
        // verifies secret and checks exp
        JWT.verify(token, req.app.get("superSecretcsp"), function(
          err,
          decoded
        ) {
          if (err) {
            log.error("token authentication failed");
            // log.debug(err);
            return res.status(403).send("Failed to authenticate token.");
          } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;
            log.debug("token authenticated successfully");
            next();
          }
        });
      } else {
        log.debug("Failed to authenticate token ");
        log.debug(req.headers);
        return res.status(403).send("Failed to authenticate token.");
      }
    });
    // mount the router on the app
    app.use("/", globalrouter);
    log.debug("Exiting Auth Gateway");
    resolve(app);
  });
}
exports.default = authorizeUser;
