const mysql = require("mysql");

function connectDB() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "demonodefall2024",
  });

  return connection;
}

module.exports = connectDB;
