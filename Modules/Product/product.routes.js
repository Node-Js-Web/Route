import  * as allProductRoutes from'./product.controller.js';

import Router from  'express' ;
const router = Router();

router.post( '/addproduct' , allProductRoutes.addProduct);
router.get( '/getallproducts' , allProductRoutes.getallproducts);
router.put( '/updateproduct/:id' , allProductRoutes.updateproduct);
router.delete( '/deleteproduct/:id' , allProductRoutes.deleteproduct);
router.get( '/searchproduct' , allProductRoutes.searchproduct);

export default router;
