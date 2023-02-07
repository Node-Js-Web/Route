import { Router } from 'express';
import { adduser, getuser, updateuser,deleteuser, searchuser, searchuserbyid,getuserwithproduct} from './user.controller.js';

const   userRouter = Router();
userRouter.post( '/adduser', adduser);
userRouter.get( '/getuser', getuser);
userRouter.put( '/updateuser/:id', updateuser);
userRouter.delete( '/deleteuser/:id', deleteuser);
userRouter.get( '/searchuser', searchuser);
userRouter.get( '/searchuserbyid', searchuserbyid);
userRouter.get( '/getuserwithproduct/:UserId', getuserwithproduct);


export{
    userRouter,
}
