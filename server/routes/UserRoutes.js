import express from "express";
import { loginUser, registerUser, userCredits } from "../controllers/userController.js";
import userAuth from "../middlewares/Auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits",userAuth, userCredits);

export default userRouter;

// http://localhost:4000/api/user/