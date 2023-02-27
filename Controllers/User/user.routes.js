import { Router } from "express";
export const userRouter = Router();
import * as userController from "./user.controller.js";
import { auth } from "../../MiddelWares/authentication.js";

userRouter.post("/signup", userController.signUp);
userRouter.get("/signin", userController.signIn);
userRouter.get("/getuserdata",auth(), userController.getuserdata);
userRouter.put("/updateuser",auth(), userController.updateUser);
userRouter.delete("/deleteuser",auth(), userController.deleteUser);


