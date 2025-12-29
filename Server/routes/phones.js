const express = require("express");
const db = require("../db");
// FIX: Switched to multer.js which checks file types
const upload = require("../multer");

const router = express.Router();

/* =========================
   GET ALL + FILTER (FIXED SQL Injection)
========================= */
router.get("/", (req, res) => {
  const { search } = req.query;
  let sql = "SELECT * FROM phones";
  // FIX: Use params array to prevent SQL injection
  const params = [];

  if (search) {
    sql += " WHERE name LIKE ?";
    params.push(`%${search}%`);
  }

  db.query(sql, params, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

/* =========================
   ADD
========================= */
router.post("/", upload.single("img"), (req, res) => {
  const { name, brand, price, condition, storage, ram, screen, battery } = req.body;
  const img = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO phones 
    (name, brand, price, \`condition\`, storage, ram, screen, battery, img)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, brand, price, condition, storage, ram, screen, battery, img],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Phone added" });
    }
  );
});

/* =========================
   UPDATE
========================= */
router.put("/:id", upload.single("img"), (req, res) => {
  const { id } = req.params;
  const { name, brand, price } = req.body;
  const img = req.file ? req.file.filename : null;

  let sql = "UPDATE phones SET name=?, brand=?, price=?";
  let params = [name, brand, price];

  if (img) {
    sql += ", img=?";
    params.push(img);
  }

  sql += " WHERE id=?";
  params.push(id);

  db.query(sql, params, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Phone updated" });
  });
});

/* =========================
   DELETE
========================= */
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM phones WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Phone deleted" });
  });
});

module.exports = router;
