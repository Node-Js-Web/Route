import  * as allUsersRoutes from  './user.controller.js' ;  

import Router from  'express' ;
const router = Router();

router.post( '/adduser' , allUsersRoutes.addUsers);
router.get( '/getallusers' , allUsersRoutes.getallusers);
router.put( '/updateuser/:id' , allUsersRoutes.updateuser);
router.delete( '/deleteuser/:id' , allUsersRoutes.deleteuser);
router.get( '/searchuser' , allUsersRoutes.searchuser);
router.get( '/searchuserbyids' , allUsersRoutes.searchuserbyids);
router.get( '/getalluserswithproducts' , allUsersRoutes.getalluserswithproducts);

export default router;
