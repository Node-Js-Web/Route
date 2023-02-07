import { Router } from 'express';
import {} from './product.controller.js';
import { addproduct, getproduct, updateproduct, deleteproduct, searchproduct} from './product.controller.js';
const   productRouter = Router();

productRouter.post( '/addproduct', addproduct);
productRouter.get( '/getproduct', getproduct);
productRouter.put( '/updateproduct/:id', updateproduct);
productRouter.delete( '/deleteproduct/:id', deleteproduct);
productRouter.get( '/searchproduct', searchproduct);


export{
    productRouter,
}
