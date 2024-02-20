const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,
  location: String,
  text: String,
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
