const express = require("express");
const router = express.Router();
const User = require("../model/form");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

router.get("/", (req, res) => {
  return res.send("home");
});
router.get("/services", (req, res) => {
  return res.send("services");
});
router.get("/about", (req, res) => {
  return res.send("about");
});
router.post("/contact", async (req, res) => {
  const { username, email, location, phone, text } = req.body;
  const newUser = await User.create({
    username: username,
    email: email,
    location: location,
    phone: phone,
    text: text,
  });
  return res.send("contact");
});
module.exports = router;
