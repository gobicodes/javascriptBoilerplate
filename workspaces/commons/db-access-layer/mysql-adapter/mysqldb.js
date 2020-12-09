var mysql = require("mysql");

class MySqlAdapter {
  constructor(logger, dbConfig) {
    this.log = logger;
    this.dbConfig = dbConfig;
    this.pool = null;
  }

  createConnectionPool() {
    this.log.debug("Entering createConnectionPool");
    // this.pool = mysql.createPool({
    //   connectionLimit: connectionLimit,
    //   host: host,
    //   user: username,
    //   password: password,
    //   database: database,
    // });

    this.log.debug("Exiting createConnectionPool");
  }

  ExecuteQuery(query, params) {
    this.log.debug("Entering ExecuteQuery");
    this.log.debug("The query going to run is " + query);
    return new Promise((resolve, reject) => {
      // try {
      //   if(!pool || pool == null){
      //       reject("No connection pool available")
      //   }
      //   pool.getConnection(function(err, connection) {
      //     if (err) reject(err); // not connected!

      //     connection.query(query, params, (error, results, fields) => {
      //       connection.release();
      //       if (error) {
      //         this.log.debug("Error occured while running query");
      //         reject(error);
      //       }
      this.log.debug("Exiting ExecuteQuery");
      resolve("POC ExecuteQuery ");
      //       resolve(results);
      //     });
      //   });
      // } catch (ex) {
      //   reject(ex);
      // }
    });
  }
}
exports.MySqlAdapter = MySqlAdapter;
