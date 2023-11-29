require("dotenv").config();

const mysql = require("mysql2/promise");
console.log(process.env);

const database = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Utilisez moviesDatabase et usersDatabase au lieu de database

module.exports = database;
