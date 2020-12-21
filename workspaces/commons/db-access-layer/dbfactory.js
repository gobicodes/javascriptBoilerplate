const MySqlAdapter = require("./mysql-adapter");
class DbFactory {
  constructor(logger) {
    this.logger = logger;
  }
  createDbAdapter(dbConfig) {
    this.logger.debug("Entering createDbAdapter for the type", dbConfig.dbtype);
    switch (dbConfig.dbtype.toUpperCase()) {
      case "MYSQL":
        this.logger.debug("Exiting createDbAdapter");
        return new MySqlAdapter.MySqlAdapter(this.logger);
      default:
        this.logger.debug("Exiting createDbAdapter");
        return null;
    }
  }
}
exports.DbFactory = DbFactory;
