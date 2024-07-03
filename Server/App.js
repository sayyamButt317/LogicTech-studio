import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; 
const userRouter = require("../Server/Routes/static.routes");
const app = require(express());

//Middleware
app.use(
    cors({
      origin: process.env.CORS_ORIGN,
      credentials: true,
    })
  );
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


//Routes Decleration
app.use("/api/v1/save-form", userRouter);
export { app };