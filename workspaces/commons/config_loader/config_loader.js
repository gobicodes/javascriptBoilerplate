const R = require("ramda");

class configLoader {
  constructor(config) {
    this.config = config;
  }

  loadConfig() {
    const defaultConfig = this.config.development;
    const environment = process.env.NODE_ENV || "development";
    const environmentConfig = this.config[environment];
    const finalConfig = R.merge(defaultConfig, environmentConfig);
    let appConfig = {
      port: finalConfig.app.port,
      dbtype: finalConfig.db.type,
      dbhost: finalConfig.db.host,
      dbport: finalConfig.db.port,
      dbusername: finalConfig.db.username,
      dbpassword: finalConfig.db.password,
      dbname: finalConfig.db.name,
      appname: finalConfig.app.name,
      loglevel: finalConfig.app.loglevel,
    };

    return appConfig;
  }
}

exports.default = configLoader;
