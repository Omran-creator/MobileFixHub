const express = require("express");
const db = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// =========================
// GET ALL ORDERS (ADMIN ONLY)
// =========================
// This gets orders joined with user details
router.get("/all", authMiddleware, (req, res) => {
  // Join orders with users table to get customer name/email
  const sql = `
    SELECT 
      orders.id, 
      orders.user_id, 
      orders.address, 
      orders.total_price, 
      orders.created_at,
      users.name as customer_name, 
      users.email as customer_email
    FROM orders 
    LEFT JOIN users ON orders.user_id = users.id
    ORDER BY orders.created_at DESC
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// =========================
// GET ITEMS FOR SPECIFIC ORDER
// =========================
router.get("/:id/items", authMiddleware, (req, res) => {
  const orderId = req.params.id;
  const sql = `
    SELECT product_name, quantity, price 
    FROM order_items 
    WHERE order_id = ?
  `;

  db.query(sql, [orderId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// =========================
// CREATE ORDER (Existing Code)
// =========================
router.post("/", authMiddleware, (req, res) => {
  const userId = req.user.id;
  const { address, cart, totalPrice } = req.body;

  if (!address || !cart || cart.length === 0) {
    return res.status(400).json({ message: "Missing required order information." });
  }

  db.beginTransaction((err) => {
    if (err) return res.status(500).json({ message: "Transaction failed", error: err });

    const orderSql = `
      INSERT INTO orders (user_id, address, total_price)
      VALUES (?, ?, ?)
    `;

    db.query(orderSql, [userId, address, totalPrice], (err, result) => {
      if (err) {
        return db.rollback(() => res.status(500).json({ message: "Failed to create order", error: err }));
      }

      const orderId = result.insertId;

      const itemValues = cart.map(item => [
        orderId, 
        item.name, 
        item.quantity,
        item.price
      ]);

      const itemSql = `
        INSERT INTO order_items (order_id, product_name, quantity, price)
        VALUES ?
      `;

      db.query(itemSql, [itemValues], (err, result) => {
        if (err) {
          return db.rollback(() => res.status(500).json({ message: "Failed to add order items", error: err }));
        }

        db.commit((commitErr) => {
          if (commitErr) {
            return db.rollback(() => res.status(500).json({ message: "Transaction commit failed", error: commitErr }));
          }
          res.status(201).json({ message: "Order placed successfully!", orderId: orderId });
        });
      });
    });
  });
});

module.exports = router;
