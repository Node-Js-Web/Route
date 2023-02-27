import { userModel } from "../../DB/Models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// sign Up
export const signUp = async (req, res) => {
    try {
        const { name, age, email, password, cpass } = req.body;
        if (password === cpass) {
            const user = await userModel.findOne({ email });
            if (user) {
                res.json({ message: "User Already Exist" });
            }
            else {
                const salt = await bcrypt.hash(password, +process.env.SALT);
                console.log(salt);
                const newUse = new userModel({ name, age, email, password: salt });
                const users = await newUse.save();
                if (users) {
                    res.json({ message: "User Signed Up", users });
                } else {
                    res.json({ message: "SignUp Fail" });
                }
            }
        }
        else {
            res.json({ message: "Password not match" });
        }
    }
    catch (err) {
        console.log(err);
        res.json({ message: err })
    }
}
// sign in(send token to user that contain user id , email and name )
export const signIn = async (req, res) => {
    try {
        const { email,password } = req.body;
        const user = await userModel.findOne( {email} );
        if (user)   {
        const compare = bcrypt.compareSync(password,  user.password);
        if(compare){
            //token
          const token=  jwt.sign({id:user._id, email:user.email},process.env.SECRET_KEY,{expiresIn:"10year"});
            res.json({ message: "User Signed In", token });
        } else {
            res.json({ message: "SignIn Fail" });
        }
     }else{
        res.json({ message: "Password is invalid" });
     }
    }
    catch (err) {
        console.log(err);
        res.json({ message: err })
    }
}

// get user data (user must be logged in and account owner only can do this)
export const getuserdata = async (req, res) => {
    try {
      const {_id} = req.user;
      const user= await userModel.findOne({_id});
        if(user){
            res.json({ message: "Done", user });
        }
        else
            res.json({ message: "Fail" });
      
    }
    catch (err) {
        res.json({ message: err })
    }
}

//update user (user must be logged in and account owner only can do this)
export const updateUser = async (req, res) => {
    try {
        const { _id } = req.user;
        const { name, email, age, password } = req.body;
        const salt = await bcrypt.hash(password, +process.env.SALT);
      const user = await userModel.updateOne({ _id }, { $set: { name, email, age, password :salt} });
        if (user.modifiedCount) {

            res.json({ message: "Done", user });
        }
        else
            res.json({ message: "Fail" });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err })
    }
}
//delete user (user must be logged in and account owner only can do this)
export const deleteUser = async (req, res) => {
    try {
        const { _id } = req.user;
        const user = await userModel.deleteOne({ _id });
        if (user.deletedCount) {
            res.json({ message: "Done", user });
        }
        else
            res.json({ message: "Fail" });
    }
    catch (err) {
        console.log(err);
        res.json({ message: err })
    }
}
