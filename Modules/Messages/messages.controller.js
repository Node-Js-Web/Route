import { userModel } from "../../DB/Models/User.Model.js";
import {messageModel} from "../../DB/Models/messages.model.js";


export const sendmessage=async(req,res)=>{
    try {
        const {message,sendto}=req.body;
        const user= await userModel.findById(sendto);
        if(user){
        const newMessage = new messageModel({message,sendto});
        const savedMessage = await newMessage.save();
        savedMessage ? res.json({message:"Message sent",savedMessage}) : res.json({message:"Message not sent"});
        }else{
            res.json({message:"User not found"})
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deletemessage=async(req,res)=>{
    try{
        const {id}=req.user;
        const {msgId}=req.body;
        const message=await messageModel.findOneAndDelete({_id:msgId,sendto:id});
        message ? res.json({message:"Message deleted",message}) : res.json({message:"Message not Found"});
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}
//get all messages
export const getMessages = async (req, res) => {
    try{
        const {id}=req.user;
        const messages=await messageModel.find({sendto:id});
        messages ? res.json({message:"Messages found",messages}) : res.json({message:"Messages not found"});
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}