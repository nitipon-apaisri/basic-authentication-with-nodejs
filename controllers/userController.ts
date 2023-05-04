import { NextFunction, Request, Response } from "express";
import { userModel } from "../models/userModel";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { userTypes } from "../types/userTypes";
export const registerController = async (req: Request, res: Response) => {
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

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const user: any = await userModel.findOne({ username: username }).exec();
        if (!user) {
            res.status(404).json("User not found!");
        } else {
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                res.status(400).json("Wrong password!");
            } else {
                res.status(200).json("Sign in success!");
            }
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
