import { productModel } from '../../DB/Models/product.model.js';
import { userModel } from '../../DB/Models/user.model.js';
import jwt from 'jsonwebtoken';

//add product (don't send user id use token)
export const addProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const { _id } = req.user;
        const newProduct = new productModel({
            name,
            price,
            createdBy: _id
        });
        console.log(newProduct);
        const savedProduct = await newProduct.save();
        savedProduct ? res.json({ message: "Done", savedProduct }) : res.json({ message: "Fail" });

    }
    catch (err) {
        console.log(err);
        res.json({ message: err })
    }
}

//update product (product owner only )
export const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { _id } = req.user;
        const { name, price } = req.body;
        const updatedProduct = await productModel.updateOne({ _id: productId, createdBy: _id }, { $set: { name, price } });
        if (updatedProduct.modifiedCount) {
            res.json({ message: "Done", updatedProduct });
        }
        else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        console.log(err);
        res.json({ message: err })
    }
}

//delete product (product owner only )
export const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const { _id } = req.user;
        const product = await productModel.deleteOne({  _id: productId, createdBy: _id });
        console.log(product);
        if (product.deletedCount) {
            res.json({ message: "Done", product });
        }
        else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        console.log(err);
        res.json({ message: err })
    }
}

//get all products with their owner's information (populate , lookup) 

export const getAllProducts = async (req, res) => {
    try {
        const product = await productModel.find().populate([
            { path: 'createdBy', select: 'name email -_id' }
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
        const { productId } = req.params;
        const { _id } = req.user;
        const product = await productModel.findById({_id:productId,createdBy:_id});
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


