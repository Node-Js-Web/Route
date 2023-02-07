import mongoose from "mongoose";

export const connectDB = async () => {
  // mongodb://127.0.0.1:27017
  return await mongoose
    .connect("mongodb://127.0.0.1:27017/UserDB")
    .then((res) => console.log("DB connection Success"))
    .catch((err) => console.log({ message: "Fail", err }));
};



