const express = require("express");
const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SECRET_KEY = "your_super_secret_key"; 

const authMiddleware = require("../middleware/authMiddleware");

// REGISTER (Default role is 'user')
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (result.length > 0) return res.status(400).json("User already exists");

    const hash = await bcrypt.hash(password, 10);

    // We default role to 'user' here
    db.query("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", 
      [name, email, hash, 'user'], 
      (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ message: "User registered successfully" });
      }
    );
  });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (result.length === 0) return res.status(400).json("User not found");

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("Invalid credentials");

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });

    // UPDATE: Send role back to frontend
    res.json({ 
      token, 
      user: { id: user.id, name: user.name, email: user.email, role: user.role } 
    });
  });
});

// GET CURRENT USER
router.get("/me", authMiddleware, (req, res) => {
  // UPDATE: Select role as well
  db.query("SELECT id, name, email, role FROM users WHERE id = ?", [req.user.id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json("User not found");
    
    res.json(result[0]);
  });
});

module.exports = router;
