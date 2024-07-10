import Express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./Routes/static.routes.js";

const app = Express();

// Middleware
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes Declaration
app.use("/api/v1/", userRouter);

export { app };
