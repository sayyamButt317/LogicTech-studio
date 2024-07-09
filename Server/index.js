import dotenv from "dotenv";
import { app } from "./app.js";
import { connectionDB } from "./Connection/connection.js";

// Environment variable configuration
dotenv.config({
    path: "./.env",
});

// Connect to MongoDB
connectionDB()
    .then(() => {
        app.listen(process.env.Port || 8000, () => {
            console.log(`Server running on port ${process.env.Port || 8000}`);
        });
    })
    .catch((err) => console.log(`MongoDB connection failed`, err));
