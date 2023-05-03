import { NextFunction, Request, Response } from "express";
import { userModel } from "../models/userModel";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
export const registerController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const hashing = await bcrypt.hash(password, 10);
        const newUser = new userModel({
            _id: uuidv4(),
            username: username,
            password: hashing,
        });
        await newUser.save();
        res.status(200).json("Register success!");
    } catch (error) {
        res.status(500).json(error);
    }
};
