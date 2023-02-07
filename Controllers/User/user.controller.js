import { userModel } from "../../DB/Models/user.model.js"

// sign Up
export const signUp = async (req, res) => {
    try {
        const{ name, age, email, password }=req.body;
        const newUse=new userModel({name,age,email,password});
        const users = await newUse.save();
        console.log(users);
        if (users) {
            res.json({ message: "User Signed Up", users });
        } else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }
}
// sign In
export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = await userModel.findOne({ email, password });
        if (users) {
            res.json({ message: "User Signed In", users });
        } else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }
}

//get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        if (users.length) {
            res.json({ message: "Done", users });
        } else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }
}
// get user by id
export const getUserById = async (req, res) => {
    try {
        const { _id } = req.params;
        const users = await userModel.findById(_id);
        if (users.length) {
            res.json({ message: "Done", users });
        } else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }

}
//get users with name start with x with age less than y
export const gatUserNameStartWithXAgeLessThanY = async (req, res) => {
    try {
        const { x, y } = req.body;
        const users = await userModel.find({ name: { $regex: "^" + x }, age: { $lt: y } });
        if (users.length) {
            res.json({ message: "Done", users });
        } else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }
}
//get users with name end with x
export const gatUserNameEndWithX = async (req, res) => {
    try {
        const { x } = req.body;
        const users = await userModel.find({ name: { $regex: x + "$" } });
        if (users.length) {
            res.json({ message: "Done", users });
        } else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }
}
//get users with name contains x
export const gatUserNameContainsX = async (req, res) => {
    try {
        const { x } = req.body;
        const users = await userModel.find({ name: { $regex: x } });
        if (users.length) {
            res.json({ message: "Done", users });
        } else {
            res.json({ message: "Fail" });
        }
    }
    catch (err) {
        res.json({ message: err })
    }
}

//get users with name fully match the name variable which destructed from body

export const gatUserNameFullyMatchX = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await userModel.find({ name });
        if (user) {
            res.json({ message: "Done", user });
        }
        else
            res.json({ message: "Fail" });
    }
    catch (err) {
        res.json({ message: err })
    }
}

//update user
export const updateUser = async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, email, age, password } = req.body;
        const user = await userModel.updateOne({ _id }, { $set: { name, email, age, password } });
        if (user.modifiedCount) {

            res.json({ message: "Done", user });
        }
        else
            res.json({ message: "Fail" });
    }
    catch (err) {
        res.json({ message: err })
    }
}
//delete user
export const deleteUser = async (req, res) => {
    try {
        const { _id } = req.params;
        const user = await userModel.deleteOne({ _id });
        if (user.deletedCount) {
            res.json({ message: "Done", user });
        }
        else
            res.json({ message: "Fail" });
    }
    catch (err) {
        res.json({ message: err })
    }
}
