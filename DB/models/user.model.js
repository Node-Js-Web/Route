import { sequalizeConnection } from "../connection.js";    
import { DataTypes } from "sequelize";
const userModel=sequalizeConnection.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
    },
    password:{
        type:DataTypes.INTEGER
    },
    age:{
        type:DataTypes.INTEGER
    }
},{
    timestamps:true
}
);

export{
    userModel
}

