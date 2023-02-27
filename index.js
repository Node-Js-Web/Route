/*
to do list
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
app.use(`${baseRoute}/note`,allRoutes.notesRouter);





app.listen(port,()=>console.log(`server is running on port ${port}`));
