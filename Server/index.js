const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = process.env.PORT || 3000;
const cookiePaser = require('cookie-parser');
const {connectToMongoDb} = require("./connection");
const path = require("path");
const USER = require("./model/form");
const staticroute = require("./Routes/staticroute");

// connectToMongoDb('mongodb://0.0.0.0:27017/LogiTech')
//   .then(() => console.log("Mongo DB connected "));

  
const DB = "mongodb+srv://sayyambutt317:fallrBw4ZaW@Logictech.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(DB,{
    useNewUrlParser:true,
  useUnifiedTopology:true,
  }).then(()=>{
    console.log("DB connected")
  }).catch((err)=> {
    console.log(`no conection ${err}`)
  })
app.use(express.urlencoded({extended:false}));
app.use(cookiePaser());

app.use("/",staticroute)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})