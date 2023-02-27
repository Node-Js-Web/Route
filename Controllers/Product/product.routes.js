import { Router } from "express";
import { auth } from "../../MiddelWares/authentication.js";
export const productRouter = Router();
import * as productController from "./product.controller.js";

productRouter.post("/addproduct",auth(), productController.addProduct);
productRouter.put("/updateproduct/:productId",auth(), productController.updateProduct);
productRouter.delete("/deleteproduct/:productId",auth(), productController.deleteProduct);
productRouter.get("/getallproducts", productController.getAllProducts);//populate
productRouter.get("/getallproducts2", productController.getAllProducts2);//lookup
productRouter.get("/getproductbyid/:productId",auth(), productController.getProductById);