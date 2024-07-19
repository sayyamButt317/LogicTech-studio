import { Router } from "express";
import Form from "../model/Form.model.js";

const router = Router();

router.get("/", (req, res) => {
  return res.send("home");
});

router.get("/services", (req, res) => {
  return res.send("services");
});

router.get("/about", (req, res) => {
  return res.send("about");
});

router.post("/form", async (req, res) => {
  try {
    const newFormData = new Form(req.body);
    await newFormData.save();
    res.status(201).json({ status: "success" });
  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).json({ status: "fail", error: err.message });
  }
});

// New endpoint to get all form data
router.get("/form", async (req, res) => {
  try {
    const formData = await Form.find();
    res.status(200).json({ status: "success", data: formData });
  } catch (err) {
    console.error("Error retrieving form data:", err);
    res.status(500).json({ status: "fail", error: err.message });
  }
});

export default router;
