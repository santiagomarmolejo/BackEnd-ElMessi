import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  stock: Number,
});

export default mongoose.model("productSchema", productSchema);
