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
const logging = false;
module.exports = new Sequelize(
  {
    database:process.env.DB_NAME,
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
     dialect: "mysql", 
     logging:logging,
  }
      
    );
