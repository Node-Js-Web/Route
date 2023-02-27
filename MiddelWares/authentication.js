import { config } from 'dotenv';
config();
import jwt from 'jsonwebtoken';
import { userModel } from '../DB/Models/user.model.js';
export const auth = () => {
    return async (req, res, next) => {
        try {
            const { authorization } = req.headers;
            const prefix = process.env.PREFIX;
            if (!authorization.startsWith(prefix)) {
                return res.json({ message: "Not Authorized" });
            }
            const token = authorization.split(prefix)[1];
            const decode = jwt.verify(token, process.env.SECRET_KEY);//process.env.SECRET_KEY
            if (!decode.id) {
                return res.json({ message: "invalid token" });
            }
            const user = await userModel.findById(decode.id);
            if (user) {
                req.user = user;
                console.log(req.user);
                next();
            } else {
                return res.json({ message: "user not found" })
            }
        }
        catch (err) {
            console.log(err)
            return res.json({ message: err })
        }
    }
}