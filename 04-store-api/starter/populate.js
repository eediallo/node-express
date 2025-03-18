import { connectDB } from "./db/connect.js";
import { promises as fs } from "fs";
import dotenv from "dotenv";
dotenv.config();
import { productModel } from "./models/product.js";

const start = async () => {
  try {
    // connect to db
    await connectDB(process.env.MONGO_URI);
    // delete all data in db
    await productModel.deleteMany();
    // add products json to db
    const productsJson = JSON.parse(await fs.readFile("./products.json"));
    await productModel.create(productsJson);
    console.log("success");
    // exit is successful
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
