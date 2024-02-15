const { Schema, model } = require("mongoose");
const formSchema = new Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    
},
    {timestamps:true},
);

const Form = model("form", formSchema);
module.exports = Form;