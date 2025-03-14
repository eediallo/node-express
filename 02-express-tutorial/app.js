import express from "express";
import { products, people } from "./data.js";

const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
});

app.get("/api/products", (req, res) => {
    const newProducts = products.map(product =>{
        const{id, name, image} =  product
        return {id, name, image}
    })
  res.json(newProducts);
});

// app.get("*", (req, res) => {
//   res.status(404).end("No resource found");
// });

app.listen(3000, () => console.log("Server is running on port 3000..."));
