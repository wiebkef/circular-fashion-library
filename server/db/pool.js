const Pool = require("pg").Pool;

const devConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
};

const prodConfig = {
  connectionString: process.env.ELEPHANT_SQL_CONNECTION_STRING,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);

module.exports = pool;
