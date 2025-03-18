import express from "express";
import { getAllProducts, getAllProductsStatic } from "../controllers/products.js";

const productRoute = express.Router();

productRoute.get("/", getAllProducts);
productRoute.get("/static", getAllProductsStatic);

export { productRoute };
