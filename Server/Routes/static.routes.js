import express from "express";
const router = express.Router();
const Form = require("../model/Form.model");

router.get("/", (req, res) => {
  return res.send("home");
});
router.get("/services", (req, res) => {
  return res.send("services");
});
router.get("/about", (req, res) => {
  return res.send("about");
});
router.post("/saveform", async (req, res) => {
  try {
    const newFormData = new Form(req.body);
    await newFormData.save();
    res.status(201).json({ status: "success" });
  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).json({ status: "fail", error: err.message });
  }
});

module.exports = router;
