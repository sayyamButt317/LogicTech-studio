const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const cookiePaser = require("cookie-parser");
const { connectToMongoDb } = require("./connection");
const RouteHandler = require("./Routes/staticroute");
const cors = require('cors')

connectToMongoDb("mongodb://0.0.0.0:27017/LogiTech").then(() =>
  console.log("Mongo DB connected ")
);

app.use(cors);
app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());

app.use("/", RouteHandler);

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );
  console.log(`Server is running on port ${port}`);

