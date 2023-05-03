import "dotenv/config";
import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(`${process.env.LOCAL_MONGODB_URI}`);
        console.log("Database connected!");
    } catch (error) {
        console.log(error);
    }
};
