import mongoose from "mongoose";
import { DB_NAME } from "../Utils/constant.js";

const connectionDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `\n Connected to MongoDB! ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MongoDB Connection Failed", error);
        process.exit(1);
    }
};

export { connectionDB };
