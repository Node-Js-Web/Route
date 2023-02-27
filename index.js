/*
Assignment 7:
User APIs=>
1- sign up
2- sign in(send token to user that contain user id , email and name )
3- update user (user must be logged in and account owner only can do this)
4- delete user (user must be logged in and account owner only can do this)
5- get user data (user must be logged in and account owner only can do this)

Product APIs:
1- add product (don't send user id use token)
2- update product (product owner only and use token)
3- delete product ( product owner only only and use token)
4- get all products with their owner's information (populate , lookup)
5- get product by id
*/


import  express  from "express";
import { config } from "dotenv";
config();
import { connectDB } from "./DB/connection.js";
import * as allRoutes from "./Controllers/index.routes.js";
const port=process.env.PORT;
const app=express();
app.use(express.json());
connectDB();
const baseUrl = "/api/v1";
app.use(`${baseUrl}/user`, allRoutes.userRouter);
app.use(`${baseUrl}/product`, allRoutes.productRouter);

app.listen(port, () => {
    console.log("Server is running on port 3000");
});


