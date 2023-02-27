import { Schema,model } from "mongoose";

const userSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
           isLogged:{
            type:Boolean,
            default:false
        },
    },
    {
        timestamps:true
    }
);

export const userModel = model("User",userSchema);




