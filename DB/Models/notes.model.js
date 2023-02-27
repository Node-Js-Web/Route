import { Schema,model } from "mongoose";

const toDoListSchema = new Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:["pending","done"],
           // default:"pending"
        },
        createdBy:{
            type:Schema.Types.ObjectId,
            ref:"User",
        },
    },
    {
        timestamps:true
    }
);

export const toDoListModel = model("Notes",toDoListSchema);
