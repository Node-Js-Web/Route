import jwt from "jsonwebtoken";
export const TokenFunction = ({
    payload = {} || "",
    signature = process.env.TOKEN_SIGNATURE,
    expiresIn = "10y"
}) => {
    if (typeof payload == "object") {
        if (Object.keys(payload).length) {
            const token = jwt.sign(payload, signature, { expiresIn })
            return token
        }
    }
    if (typeof payload == "string") {
        if (payload != "") {
            const decode = jwt.verify(payload , signature, { expiresIn })
            return decode
        }
    }
    return false;
}