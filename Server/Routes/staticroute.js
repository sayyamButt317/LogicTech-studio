const express = require("express");
const router = express.Router();
const User = require("../model/form");


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
  if(!username || !email || !location || !phone || !text) {
     return
    }
  return res.send("contact");
});
module.exports = router;
