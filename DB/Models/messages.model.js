import { Schema,model } from "mongoose";

const messageSchema = new Schema(
    {
        message:{
            type:String,
            required:true
        },
        sendto:{
            type:Schema.Types.ObjectId,
            ref:"User",
        },
    },
    {
        timestamps:true
    }
);

export const messageModel = model("Message",messageSchema);
