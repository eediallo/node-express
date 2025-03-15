import express from "express";
import { logger } from "./logger.js";
import { authorize } from "./authorize.js";

const app = express();

app.use([logger, authorize])

app.get('/', logger, (req, res) =>{
console.log(req.user)
  res.send('HOME PAGE')
})


app.get('/about', logger, (req, res) =>{
  res.send('ABOUT PAGE')
})

app.get('/api/items', logger, (req, res) =>{
  res.send('Items PAGE')
})

app.get('/api/products', logger, (req, res) =>{
  res.send('Products PAGE')
})


app.listen(3000, () => console.log("Server is running on port 3000..."));
