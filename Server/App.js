import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./Routes/static.routes.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(
    cors({
        origin: process.env.CORS_ORIGIN , // Default to localhost for development
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes Declaration
app.use("/api/v1/", userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export { app };
