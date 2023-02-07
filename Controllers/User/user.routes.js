import { Router } from "express";
export const userRouter = Router();
import * as userController from "./user.controller.js";

userRouter.post("/signup", userController.signUp);
userRouter.get("/signin", userController.signIn);
userRouter.get("/getallusers", userController.getAllUsers);
userRouter.get("/getuserbyid/:_id", userController.getUserById);
userRouter.get("/getusernamestartswithxagelessy", userController.gatUserNameStartWithXAgeLessThanY);
userRouter.get("/getusernameendswithx", userController.gatUserNameEndWithX);
userRouter.get("/getusernamecontainsx", userController.gatUserNameFullyMatchX);
userRouter.put("/updateuser/:_id", userController.updateUser);
userRouter.delete("/deleteuser/:_id", userController.deleteUser);


