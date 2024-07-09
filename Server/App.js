import Express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./Routes/static.routes.js";
const app = Express();

//Middleware
app.use(
    cors({
      origin: process.env.CORS_ORIGN,
      credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


//Routes Decleration
// app.use("/api/v1/save-form", userRouter);
app.use("/api/v1/", () => userRouter);
export { app };