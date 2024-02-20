const express = require("express");
const router = express.Router();
// const Form require('../model/Form')



router.get("/", (req, res) => {
  return res.send("home");
});
router.get("/services", (req, res) => {
  return res.send("services");
});
router.get("/about", (req, res) => {
  return res.send("about");
});
// router.post("/save-form", async (req, res) => {
//   try {
//     const { username, email, phone, location, text } = req.body;
//     const newFormData = new Form({ username, email, phone, location, text });
//     await newFormData.save();
//     res.status(201).send("Form data saved successfully");
//   } catch (err) {
//     console.error("Error saving form data:", err);
//     res.status(500).send("Error saving form data");
//   }
// });
module.exports = router;
