import mongoose from "mongoose";
require("dotenv").config();

export const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URI)
    .then((db) => console.log(`connected to ${db}`))
    .catch((e) => console.log(`error ${e}`));
};
