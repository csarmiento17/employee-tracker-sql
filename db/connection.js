const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: "P@ssw0rd",
  database: "employee_tracker",
});

module.exports = db;
