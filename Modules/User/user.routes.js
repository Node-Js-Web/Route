import { Router } from "express";
import { auth } from "../../MiddelWares/authentication.js";
const userRouter = Router();
import * as UserController from "./user.controller.js";

userRouter.post("/signup", UserController.signUp);
userRouter.get("/signin", UserController.signin);
userRouter.delete("/deleteaccount",auth(), UserController.deleteAccount);
userRouter.get("/getsenderprofile",auth(), UserController.getSenderProfile);
userRouter.get("/getownerprofile",auth(), UserController.getOwnerProfile);
userRouter.put("/updateuser", auth(), UserController.updateProfile);

export default userRouter;