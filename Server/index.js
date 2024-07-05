const express = require("express");
const app = express();
const connectionDB = require( "../Server/Connection/connection");
const {config} =require("dotenv");


// //environment variable configuration
config({
  path: "./.env",
});

//connect mongodb and catch error
connectionDB()
  .then(
    app.listen(process.env.Port || 8000, () => {
      console.log(`Server running on port ${process.env.Port || 8000}`);
    })
  )
  .catch((err) => console.log(`Mongo db connection failed `, err));
