import { userModel } from "../../DB/Models/User.Model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { messageModel } from "../../DB/Models/messages.model.js";

// sign up
export const signUp = async (req, res) => {
    const { name, email, password, cpass, age } = req.body;
    if (password !== cpass) {
        return res.status(400).json({ msg: "password not match" })
    } else {
        try {
            const user = await userModel.findOne({ email })
            if (!user) {
                const hashedPass = await bcrypt.hash(password, +process.env.SALT_ROUNDS);
                const newUser = new userModel({
                    name,
                    email,
                    password: hashedPass,
                    age
                })
                const savedUser = await newUser.save();
                console.log(savedUser)
                savedUser ? res.json({ message: "SignUp success", savedUser }) : res.json({ message: "SignUp fail" });
            }
        }
        catch (err) {
            console.log(err)
            res.json({ msg: err })
        }
    }
}

// sign In
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            const passmatch = bcrypt.compareSync(password, user.password);
            if (passmatch) {
                // token
                const token = jwt.sign({ id: user.id, email: user.email, age: user.age }, process.env.TOKEN_SIGNATURE);
                res.json({ message: "Log in success", token });
            } else {
                res.json({ message: "in-valid login information" });
            }
        }
    }
    catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
}

// delete account
export const deleteAccount = async (req, res) => {
    try {
        const { id } = req.user;
        const user = await userModel.findByIdAndDelete(id);
        user ? res.json({ message: "Account deleted", user }) : res.json({ message: "Account not found" });
        const messages = await messageModel.deleteMany({ sendto: id }); // delete also all messages that sent to this user
    }
    catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
}

//get owner user profile

export const getOwnerProfile = async (req, res) => {
    try {
        const { id } = req.user;
        const user = await userModel.findById(id);
        user ? res.json({ message: "user found", user }) : res.json({ message: "user not found" });
    }
    catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
}

// get sender user profile
export const getSenderProfile = async (req, res) => {
    try {
        const { id } = req.body;
        const user = await userModel.findById(id);
        user ? res.json({ message: "user found", user }) : res.json({ message: "user not found" });
    }
    catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
}

// update user profile
export const updateProfile = async (req, res) => {
    try {
        const { id } = req.user;
        const { name, email, age } = req.body;
        const user = await userModel.updateOne({ _id: id });
        user ? res.json({ message: "user updated", user }) : res.json({ message: "user not found" });
    } catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
}
