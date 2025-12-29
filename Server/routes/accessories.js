const express = require("express");
const db = require("../db");
// FIX: Switched to multer.js for security
const upload = require("../multer");

const router = express.Router();

/* =========================
   GET ALL ACCESSORIES + FILTER
========================= */
router.get("/", (req, res) => {
  const { search, category } = req.query;
  let sql = "SELECT * FROM accessories WHERE 1=1";
  const params = [];

  if (search) {
    sql += " AND name LIKE ?";
    params.push(`%${search}%`);
  }

  if (category) {
    sql += " AND category=?";
    params.push(category);
  }

  db.query(sql, params, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

/* =========================
   ADD ACCESSORY
========================= */
router.post("/", upload.single("img"), (req, res) => {
  const { name, brand, price, category } = req.body;
  const img = req.file ? req.file.filename : null;

  const sql = `
    INSERT INTO accessories (name, brand, price, category, img)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, brand, price, category, img],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Accessory added successfully" });
    }
  );
});

/* =========================
   UPDATE ACCESSORY
========================= */
router.put("/:id", upload.single("img"), (req, res) => {
  const { id } = req.params;
  const { name, brand, price, category } = req.body;
  const img = req.file ? req.file.filename : null;

  let sql = `
    UPDATE accessories 
    SET name=?, brand=?, price=?, category=?
  `;
  const params = [name, brand, price, category];

  if (img) {
    sql += ", img=?";
    params.push(img);
  }

  sql += " WHERE id=?";
  params.push(id);

  db.query(sql, params, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Accessory updated successfully" });
  });
});

/* =========================
   DELETE ACCESSORY
========================= */
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM accessories WHERE id=?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Accessory deleted successfully" });
  });
});

module.exports = router;
