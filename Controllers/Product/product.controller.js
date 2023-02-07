import { productModel } from '../../DB/Models/product.model.js';
import { userModel } from '../../DB/Models/user.model.js';

//add product
export const addProduct = async (req, res) => {
    try {
        const user=await userModel.findById(req.body.createdBy);
        if(user){
            const product = await productModel.insertMany(req.body);
            if (product.length) {
                res.json({ message: "Done", product });
            } else {
                res.json({ message: "Fail" });
            }
        } else{
            res.json({message:"User needs to be registered first"});
        } 
    }
    catch (err) {
        res.json({ message: err })
    }
}
//update product (product owner only )

export const updateProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, price, owner } = req.body;
        const product = await productModel.updateOne({ _id, owner }, { $set: { name, price } });
        if (product.modifiedCount) {
            res.json({ message: "Done", product });
        }
        else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }
}
//delete product (product owner only )

export const deleteProduct = async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, price, owner } = req.body;
        const product = await productModel.deleteOne({ _id, owner }, { $set: { name, price } });
        if (product.deletedCount) {
            res.json({ message: "Done", product });
        }
        else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }
}

//get all products with their owner's information (populate , lookup) 

export const getAllProducts = async (req, res) => {
    try {
        const product = await productModel.find().populate([  
            { path: 'createdBy', select: 'name email -_id'}
        ]
        ).select('name price -_id');
    
        if (product.length) {
            res.json({ message: "Done", product });
        }
        else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }
}
export const getAllProducts2 = async (req, res) => {
    try {
        const product = await productModel.aggregate([
            {
                $lookup: {
                from: 'usermodels',
                localField: 'createdBy',
                foreignField: '_id',
                as: 'UserData',
                pipeline: 
                [
                    {$match: {age: {$eq: 24}}},
                ]    


            }
            }
        ]);
    
        if (product.length) {
            res.json({ message: "Done", product });
        }
        else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }
}

//get product by id

export const getProductById = async (req, res) => {
    try {
        const { _id } = req.params;
        const product = await productModel.findById(_id);
        if (product) {
            res.json({ message: "Done", product })
        }
        else
            res.json({ message: "Fail" })
    }
    catch (err) {
        res.json({ message: err })
    }

}


