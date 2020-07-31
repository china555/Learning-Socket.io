const { Pool } = require("pg");
require("dotenv").config();
const dbconfig = new Pool({
  host: process.env.Host, // Postgres ip address or domain name
  port: process.env.DB_PORT, // Postgres server port
  database: process.env.Database, // Name of database to connect to
  user: process.env.DB_USER, // Username of database user
  password: process.env.Password, // Password of database user
});
module.exports = dbconfig; //
