import { Router } from "express";
import { registerController, auth } from "../controllers/userController";
const router = Router();
router.post("/register", registerController);
router.post("/auth", auth);
export default router;
