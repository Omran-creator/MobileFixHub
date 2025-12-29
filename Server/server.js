const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static file serving for uploaded images
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/phones", require("./routes/phones"));
app.use("/api/parts", require("./routes/parts"));
app.use("/api/accessories", require("./routes/accessories"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/auth", require("./routes/auth"));

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
