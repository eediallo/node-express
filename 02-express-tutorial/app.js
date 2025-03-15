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

// Params
app.get("/api/products/:productID", (req, res) => {
  const {productID} = req.params
  const sortedProducts = products.filter(product => {
    return product.id === Number(productID)
  })

  res.status(200).json(sortedProducts)
});


app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  return res.send("Hello World.");
});

// query string
app.get("/api/query", (req, res) => {
  const {search, limit} = req.query
  let sortedProducts = [...products]
  if(search){
    sortedProducts = sortedProducts.filter(product => {
      return product.name.startsWith(search)
    })

    if(limit){
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts < 1 ){
      return res.json({success: true, data: sortedProducts})
    }

    res.status(200).json(sortedProducts)
  }
});
// app.get("*", (req, res) => {
//   res.status(404).end("No resource found");
// });

app.listen(3000, () => console.log("Server is running on port 3000..."));
