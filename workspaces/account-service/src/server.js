"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const http = require("http");
const cors = require("cors");
const csp_commons = require("@csp/commons");
const defaultConfig = require("../config/appConfig.json")
// const dotenv = require("dotenv");
const RouteGateway = require("./routesgateway");
const AuthGateway = require("./gateway/auth_gateway");

function startApplication() {
  console.log("Starting **********Login Service ****************");
  try {
    // process.env.NODE_ENV="production"
    // var result = dotenv.config();
    // if (result.error) {
    //   console.log(result.error);
    // }
    // dotenv.config({ path: "../" });
  
    var appConfig = new csp_commons.config(defaultConfig);
    let config = appConfig.loadConfig();
    console.log(config)
    if (config) {
      process.env.LOG_LEVEL = config.loglevel;
      process.env.DB_DBNAME = config.dbname;
      process.env.DB_HOST = config.dbhost;
      process.env.DB_PASS = config.dbpassword;
      process.env.DB_USER = config.dbusername;
      process.env.DB_TYPE = config.dbtype;
      process.env.APP_NAME = config.appname;
      process.env.PORT = config.port;
    }
  } catch (ex) {
    console.log("Error in reading config file ", ex);
  }



  if (
    !process.env.LOG_LEVEL ||
    !process.env.DB_DBNAME ||
    !process.env.DB_HOST ||
    !process.env.DB_PASS ||
    !process.env.DB_USER
  ) {
    console.log("Required Env Variables are not set");
    console.log("Aborting & Returning *******Login Service********");

    return false;
  }
  let dbconfig;
  let log;
  let serverConfig;
  const logLevel = process.env.LOG_LEVEL;

  // Initialize the log object
  log = new csp_commons.Log(logLevel);
  log.debug("Logger Obj Created");
  //constructing the db configuration.
  dbconfig = {
    dbtype: process.env.DB_TYPE,
    database: process.env.DB_DBNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    username: process.env.DB_USER,
  };
  // Constructing the server configuration.
  serverConfig = {
    host: "",
    routePrefix: "",
    port: Number(process.env.PORT),
    allowCrossOrigin: true,
    staticfilePath: "",
    appName: "Authentication-service",
  };
  //log.debug(dbconfig.dbtype.toString());
  //create expressjs application
  const app = express();

  app.use((req, res, next) => {
    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, x-access-token,Authorization"
    );
    // intercept OPTIONS method
    if ("OPTIONS" == req.method) {
      res.send(200);
    } else {
      next();
    }
  });
  app.set("port", serverConfig.port);
  app.use(bodyParser.json());
  app.set(
    "superSecretcsp",
    "l4AfXkC_6GZA79mxlWK3NkLUOz9ASrJBAtS29yP6Wa0yZDgeKVCb-qYN_csp"
  );
  app.options("*", cors());
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );

  //  AuthGateway.default(app, log);
  RouteGateway.init(app, dbconfig, log).then((x) => {
    let server = http.createServer(x);
    server.listen(serverConfig.port, () =>
      log.debug(`API running on localhost:${serverConfig.port}`)
    );
    server.on("listening", () =>
      log.debug("Application Started" + serverConfig.appName)
    );
    log.debug("Exiting StartServer");
  });
  return true;
}
exports.default = startApplication;
