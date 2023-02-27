import { Router } from 'express';
const messageRouter=Router();
import * as MessageController from './messages.controller.js';
import {auth} from '../../MiddelWares/authentication.js';

messageRouter.post('/sendmessage',MessageController.sendmessage);
messageRouter.delete('/deletemessage',auth(),MessageController.deletemessage);
messageRouter.get('/getmessages',auth(),MessageController.getMessages);
export default messageRouter;
