import { productModel } from "../../DB/models/product.model.js";
import { Op } from "sequelize";

export const addproduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body);
        res.json({ message: "Done" });
    } catch (err) {
        console.log(err);
    }
};

export const getproduct = async (req, res) => {
    try {
        const product = await productModel.findAll();
        res.json(product);
    } catch (err) {
        console.log(err);
    }
};

export const updateproduct = async (req, res) => {
    try {
        const product = await productModel.update(req.body, { where: { id: req.params.id } });
        res.json({ message: "Done" });
    } catch (err) {
        console.log(err);
    }
}

export const deleteproduct = async (req, res) => {
    try {
        const product = await productModel.destroy({ where: { id: req.params.id } });
        res.json({ message: "Done" });
    } catch (err) {
        console.log(err);
    }
}

export const searchproduct = async (req, res) => {
    try {
        const product = await productModel.findAll({ where: { price: { [Op.gt]: 3000 } } });
        res.json(product);
    } catch (err) {
        console.log(err);
    }
}


