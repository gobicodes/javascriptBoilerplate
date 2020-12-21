const config = require('../../config/appConfig.json');
const R =require('ramda');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = R.merge(defaultConfig, environmentConfig);

exports.default = {
  port: finalConfig.app.port,
  dbtype: finalConfig.db.type,
  dbhost: finalConfig.db.host,
  dbport: finalConfig.db.port,
  dbusername: finalConfig.db.username,
  dbpassword: finalConfig.db.password,
  dbname: finalConfig.db.name,
  appname: finalConfig.app.name,
  loglevel: finalConfig.app.loglevel
};
