/*
Assignment 6:
using mongoose & express
create user model (name, email, age, password )
NOTES
(x and y are variables)
User APIs=>
1- sign up
2- sign in
3- update user
4- delete user
5- get all users
6- get users with name start with x with age less than y
7- get users with name end with x
8- get users with name contains x
9- get users with name fully match the name variable which destructed from body

Product APIs:
1- add product
2- update product (product owner only )
3- delete product ( product owner only)
4- get all products with their owner's information (populate , lookup)
5- get product by id


search points :
1-difference between operators ( eq , in , nin , ne )
2- how to relate two collections together
*/


import  express  from "express";
import { connectDB } from "./DB/connection.js";
import * as allRoutes from "./Controllers/index.routes.js";
const app=express();
app.use(express.json());
connectDB();
const baseUrl = "/api/v1";
app.use(`${baseUrl}/user`, allRoutes.userRouter);
app.use(`${baseUrl}/product`, allRoutes.productRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


