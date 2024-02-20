const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
 const Form = require('./model/Formmodel')

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// MongoDB connection
const dbURL = "mongodb://localhost:27017/LogiTech";
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB",{dbURL});
});

// Routes
app.post("/save-form", async (req, res) => {
  try {
    const { username, email, phone, location, text } = req.body;
    const newFormData = new Form({ username, email, phone, location, text });
    await newFormData.save();
    res.status(201).send("Form data saved successfully");
  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).send("Error saving form data");
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
