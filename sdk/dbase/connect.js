const { sequelize, Sequelize, Op } = require("sequelize");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
});
db.getConnection((err, connection) => {
  if (err) {
    throw err;
  }

  return connection.query(
    "CREATE DATABASE IF NOT EXISTS " + process.env.DB_NAME,
    (queryErr) => {
      connection.release();

      if (queryErr) {
        throw queryErr;
      }

      console.log("Database is ready");
      return 
    }
  );
});
 module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    { dialect: "mysql" }
  );
