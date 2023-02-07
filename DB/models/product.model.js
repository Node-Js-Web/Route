import { sequalizeConnection } from "../connection.js";
import { DataTypes } from "sequelize";
import { userModel } from "./user.model.js";

const productModel=sequalizeConnection.define('Product',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
    }
});{
    timestamps:true
}


userModel.hasMany(productModel,{
 onDelete:"CASCADE",
    onUpdate:"CASCADE"   
});
productModel.belongsTo(userModel);

export{
    productModel
}
