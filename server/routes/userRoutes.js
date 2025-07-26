import express from "express";
import useController from "../controllers/useController.js";

const { loginUser, registerUser, adminLogin } = useController;

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

export default userRouter;
