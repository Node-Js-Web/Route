import { userModel } from "../../DB/Models/User.Model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { toDoListModel } from "../../DB/Models/notes.model.js";
import { TokenFunction } from "../../utils/tokenFun.js";

// sign up
export const signUp = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
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
        } else {
            console.log("Email already exist")
            res.json({ message: "Email already exist" });
        }
    }
    catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
}


// sign In
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOneAndUpdate({ email }, { isLogged: true });
        if (user) {
            const passmatch = bcrypt.compareSync(password, user.password);
            if (passmatch) {
                // token
                const token = TokenFunction({ payload: { id: user._id, name: user.name, email: user.email, age: user.age } });
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
        const messages = await toDoListModel.deleteMany({ sendto: id }); // delete also all messages that sent to this user
    }
    catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
}

//get user profile

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

// update user profile
export const updateProfile = async (req, res) => {
    try {
        const { id } = req.user;
        const { name, email, age } = req.body;
        const user = await userModel.updateOne({ _id: id }, { name, email, age });
        user ? res.json({ message: "user updated", user }) : res.json({ message: "user not found" });
    } catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
}

// user sign out
export const signOut = async (req, res) => {  // akeed m4 da el matloob xDDD 
    try {
        const { _id } = req.user;
        const user = await userModel.findByIdAndUpdate(_id, { isLogged: false });
        user ? res.json({ message: "user signed out", user }) : res.json({ message: "user not found" });

    } catch (err) {
        console.log(err)
        res.json({ msg: err })
    }
}
