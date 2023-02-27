import { Router } from "express";
import { auth } from "../../MiddelWares/authentication.js";
import { validation } from "../../MiddelWares/validation.js";
const userRouter = Router();
import * as UserController from "./user.controller.js";
import { signUpValidator } from "./user.validation.js";

userRouter.post("/signup",validation(signUpValidator), UserController.signUp);
userRouter.get("/signin",validation(signUpValidator), UserController.signin);
userRouter.delete("/deleteaccount",auth(), UserController.deleteAccount);
userRouter.get("/getownerprofile",auth(), UserController.getOwnerProfile);
userRouter.put("/updateuser", auth(), UserController.updateProfile);
userRouter.get("/signout", auth(), UserController.signOut);

export default userRouter;