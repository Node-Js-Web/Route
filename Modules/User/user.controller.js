import { userModel } from "../../DB/models/user.model.js";
import { Op, where } from "sequelize";

export const adduser=async(req,res)  => {
    try{
const user=await userModel.create(req.body);
res.json({message:"Done"});
    }catch(err){
        console.log(err);
    }
}

export const getuser=async(req,res)  => {
    try{
const user=await userModel.findAll();
res.json(user);
    }catch(err){
        console.log(err);
    }       
}

export const updateuser=async(req,res)  => {
    try{
const user=await userModel.update(req.body,{where:{id:req.params.id}});
res.json({message:"Done"});
    }catch(err){
        console.log(err);
    }   
}

export const deleteuser=async(req,res)  => {
    try{
const user=await userModel.destroy({where:{id:req.params.id}});
res.json({message:"Done"});
    }catch(err){
        console.log(err);
    }
}

export const searchuser=async(req,res)  => {
    try{
const user=await userModel.findAll({where:{name:{[Op.like]:'a%'},age:{[Op.gt]:30}}});
res.json(user);
    }catch(err){
        console.log(err);
    }
}

export const searchuserbyid=async(req,res)  => {
    try{
const user=await userModel.findAll({where:{id:{[Op.in]:[1,2,3]}}});
res.json(user);
    }catch(err){
        console.log(err);
    }
}

export const getuserwithproduct=async(req,res)  => {
    try{
const user=await userModel.findAll({where:{id:req.params.UserId},include:{all:true}});
res.json(user);
    }catch(err){
        console.log(err);
    }
}









