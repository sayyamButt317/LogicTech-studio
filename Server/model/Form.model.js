const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  username: String,
  email: String,
  phone: String,
  location: String,
  text: String,
});

const dbURL =
"mongodb+srv://sayyambutt317:1234@logictech.bvyxt1p.mongodb.net/LogicTech";

// Save form data to MongoDB
formSchema.save(function(err,result){
const connectDB = async () => {
  await mongoose.connect(dbURL);
};
connectDB();
  
  if(err) console.log(err);
  else console.log("Form data saved successfully"); 
}
)

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
