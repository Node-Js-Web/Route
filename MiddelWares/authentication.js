
/*
Authentication middleware logic steps:
 * Destruct token
 * Prefix for more security
 * Get the token again
 * Decode the token
 * Get user data
 * Store user data in the request to access it in the controller 
 */ 
import jwt from "jsonwebtoken";
import { userModel } from "../DB/Models/User.Model.js";
import { TokenFunction } from "../utils/tokenFun.js";

export const auth= () => {
    return async (req, res, next) => {
        const {token} = req.headers;
        if(!token){
            return res.json({message: "token not found"})
        }
        if(!token.startsWith(process.env.PREFIX_TOKEN)){
            return res.json({message: "Wrong prefix"})
        }
        const authtoken = token.split(process.env.PREFIX_TOKEN)[1];
        const decode = TokenFunction({payload: authtoken})
        if(!decode || !decode.id){
            return res.json({message: "in-valid token"})
        }
        const user = await userModel.findById(decode.id);
        if(user){
            req.user = user;
            next();
        }else{
            res.json({message: "in-valid userId"})
        }
    }
}