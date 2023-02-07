/*
Assignment 5:
*using  Sequelize   and express * 
create two tables
user table (name , email , password ,age)
product table (pName , pDescription, price, createdby)

-user APIs-
1- add user 
2- update user 
3- delete user
5- search for user where his name start with "a" and age less than 30 => using like for characters
6- search for users by list of ids => using IN
7- get all user 
8- get all users with products

-product APIs-
1- add product
2- delete product (product owner only )
3- update product (product owner only)
4- get all products 
5- search for products where price greater than 3000

*/

import express from "express";
const app= express();
import { connectionDB } from "./DB/connection.js";
app.use(express.json());
import * as allRoutes from "./Modules/index.routes.js";
const baseUrl="/api/v1";

app.use("/user",allRoutes.userRouter);
app.use("/product",allRoutes.productRouter);
connectionDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    });
