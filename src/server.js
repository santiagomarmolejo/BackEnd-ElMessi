const express = require("express");
const app = express();
const cors = require('cors');
import { connectDB } from "./database";
import productModel from "./schemas/product";
connectDB();

app.use(express.json());
app.use(cors());

app.post("/addproduct", (req, res) => {
  const response = req.body;

  const product = productModel(response);

  product.save();

  res.send("File sent" + product);
});

app.get("/product", async (req, res) => {
  const response = await productModel
    .find({})
    .clone()
    .catch((e) => {
      console.log(`Error ${e}`);
    });
  res.send(response);
});

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(3100);
