import { Router } from "express";
export const productRouter = Router();
import * as productController from "./product.controller.js";

productRouter.post("/addproduct", productController.addProduct);
productRouter.put("/updateproduct/:_id", productController.updateProduct);
productRouter.delete("/deleteproduct/:_id", productController.deleteProduct);
productRouter.get("/getallproducts", productController.getAllProducts);
productRouter.get("/getallproducts2", productController.getAllProducts2);
productRouter.get("/getproductbyid/:_id", productController.getProductById);