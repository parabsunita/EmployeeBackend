require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors middleware
const userRoutes = require("./users/user.route");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.DB_URL;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Use cors middleware with wildcard
app.use(cors());

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
