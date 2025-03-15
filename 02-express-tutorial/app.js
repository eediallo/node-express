import express from "express";
import { products, people } from "./data.js";

const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  return res.send("Hello World.");
});

app.get("/api/query", (req, res) => {
  console.log(req.query)
  const {search, limit} = req.query
  let sortedProducts = [...products]
  if(search){
    sortedProducts = sortedProducts.filter(product => {
      return product.name.startsWith(search)
    })

    if(limit){
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    res.status(200).json(sortedProducts)
  }
});
// app.get("*", (req, res) => {
//   res.status(404).end("No resource found");
// });

app.listen(3000, () => console.log("Server is running on port 3000..."));
