const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/auth", require("./routes/authRoutes"));

// test route
app.get("/", (req, res) => {
  res.json({ message: "DevFlow API running 🚀" });
});

// ✅ define PORT BEFORE using it
const PORT = process.env.PORT || 5000;

// connect DB then start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

app.use("/entries", require("./routes/entryRoutes"));
