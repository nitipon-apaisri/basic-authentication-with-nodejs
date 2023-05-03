import mongoose from "mongoose";
import { userTypes } from "../types/userTypes";
const { Schema } = mongoose;
const userSchema = new Schema<userTypes>({ _id: String, username: String, password: String }, { collection: "users" });
export const userModel = mongoose.model("users", userSchema);
