const express = require("express");
const db = require("../db");
// FIX: Switched to multer.js for security
const upload = require("../multer");

const router = express.Router();

/* =========================
   GET ALL PARTS + FILTER
========================= */
router.get("/", (req, res) => {
  const { search } = req.query;
  let sql = "SELECT * FROM parts";
  // Using params is also good practice here
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
   ADD PART
========================= */
router.post("/", upload.single("img"), (req, res) => {
  const { name, brand, price, compatible } = req.body;
  const img = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO parts (name, brand, price, compatible, img)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, brand, price, compatible, img],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Part added successfully" });
    }
  );
});

/* =========================
   UPDATE PART
========================= */
router.put("/:id", upload.single("img"), (req, res) => {
  const { id } = req.params;
  const { name, brand, price, compatible } = req.body;
  const img = req.file ? req.file.filename : null;

  let sql = `
    UPDATE parts 
    SET name=?, brand=?, price=?, compatible=?
  `;
  const params = [name, brand, price, compatible];

  if (img) {
    sql += ", img=?";
    params.push(img);
  }

  sql += " WHERE id=?";
  params.push(id);

  db.query(sql, params, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Part updated successfully" });
  });
});

/* =========================
   DELETE PART
========================= */
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM parts WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Part deleted successfully" });
  });
});

module.exports = router;
