import mongoose from "mongoose";

// Form schema
const formSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  text: { type: String, required: true },
});

const Form = mongoose.model("Form", formSchema);
export { Form };
