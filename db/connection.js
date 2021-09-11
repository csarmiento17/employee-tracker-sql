const mysql = require("mysql2");
const chalk = require("chalk");
const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: "P@ssw0rd", //process.env.DB_PASSWORD,
  database: "employee_tracker",
});

console.log(chalk.blue.bold("==Connected to employee_tracker Database=="));
module.exports = db;
