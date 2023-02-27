/*
// saraha 
Users: (username , email , password , gender , profile_picture )
1- sign up 
2- login
3- getall messages
4- delete account(owner) 
5- get user profile(owner , sender)
6- update profile
7- share profile link

messages:(msg_body , sendTo )
1- send message 
2-delete message(owner) 
*/

import express from "express";
import { connectionDB } from './DB/connection.js';
import { config } from "dotenv";
config();
const app=express();
const port=+process.env.PORT;
const baseRoute = "/api/v1";
import * as allRoutes from "./Modules/index.routes.js";

connectionDB();
app.use(express.json());
app.use(`${baseRoute}/user`,allRoutes.userRouter);
app.use(`${baseRoute}/message`,allRoutes.messageRouter);





app.listen(port,()=>console.log(`server is running on port ${port}`));
