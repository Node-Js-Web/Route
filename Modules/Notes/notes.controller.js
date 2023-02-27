import { userModel } from "../../DB/Models/User.Model.js";
import { toDoListModel } from "../../DB/Models/notes.model.js";

// add note
export const addnote = async (req, res) => {
    try {
        const { id } = req.user;
        const user= await userModel.findById(id);
        if(user){
        const { title,description, status} = req.body;
        const newNote = new toDoListModel({ title,description, status, createdBy: id });
        const savedMessage = await newNote.save();
        savedMessage ? res.json({ message: "Note sent", savedMessage }) : res.json({ message: "Note not sent" });
    }
    else{
        res.json({message:"User not found"});
    }
}
catch (error) {
    res.status(500).json(error);
}
}

//get all Notes
export const getAllNotes = async (req, res) => {
    try {
        const { id } = req.user;
        const messages = await toDoListModel.find({ createdBy: id });
        messages ? res.json({ message: "Messages found", messages }) : res.json({ message: "Messages not found" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
// delete selected notes
export const deletenote = async (req, res) => {
    try {
        const { id } = req.user;
        const { noteId } = req.params;
        const note = await toDoListModel.findOneAndDelete({ _id: noteId, createdBy: id });
        note ? res.json({ message: "Message deleted", note }) : res.json({ message: "Message not Found" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// delete all notes
export const deleteAllNotes = async (req, res) => {
    try {
        const { id } = req.user;
        const notes = await toDoListModel.deleteMany({ createdBy: id });
        notes ? res.json({ message: "Messages deleted", notes }) : res.json({ message: "Messages not Found" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

// update selected notes
export const updateNote = async (req, res) => {
    try{
        const { id } = req.user;
        const { noteId } = req.params;
        const { title,description, status } = req.body;
        const updatedNote = await toDoListModel.findOneAndUpdate(
            { _id: noteId, createdBy: id },
            { title,description, status },
        );
        updatedNote ? res.json({ message: "Note updated", updatedNote }) : res.json({ message: "Note not Found" });
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}

// search for note
export const searchNote = async (req, res) => {
    try{
        const { id } = req.user;
        const { title } = req.body;
        const note = await toDoListModel.find({ createdBy: id, title: { $regex: title, $options: "i" } });// Options Case insensitivity to match upper and lower cases.
        note ? res.json({ message: "Note found", note }) : res.json({ message: "Note not Found" });
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}
