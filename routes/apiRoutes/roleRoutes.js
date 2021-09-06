const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const inputCheck = require("../utils/inputCheck");

// Get all the employee role's record
router.get("/role", (req, res) => {
  const sql = `SELECT * FROM emp_role
                ORDER BY name ASC`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Create an employee role record
router.post("/role", ({ body }, res) => {
  const errors = inputCheck(body, "title", "salary", "department_id");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO department (name) VALUES (?,?,?)`;
  const params = [body.title, body.salary, body.department_id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
      changes: result.affectedRows,
    });
  });
});

module.exports = router;
