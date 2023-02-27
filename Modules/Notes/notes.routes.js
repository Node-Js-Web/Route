import { Router } from 'express';
const notesRouter=Router();
import * as NotesController from './notes.controller.js';
import {auth} from '../../MiddelWares/authentication.js';

notesRouter.post('/addnote',auth(),NotesController.addnote);
notesRouter.get('/getAllNotes',auth(),NotesController.getAllNotes);
notesRouter.delete('/deletenote/:noteId',auth(),NotesController.deletenote);
notesRouter.delete('/deleteallnote',auth(),NotesController.deleteAllNotes);
notesRouter.patch('/updatenote/:noteId',auth(),NotesController.updateNote);
notesRouter.get('/searchNote',auth(),NotesController.searchNote);
export default notesRouter;
