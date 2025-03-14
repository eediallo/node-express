import express from "express";
import { products, people } from "./data.js";

const app = express();

app.get("/", (req, res) => {
  res.json(products);
});

app.get("*", (req, res) => {
  res.status(404).end("No resource found");
});

app.listen(3000, () => console.log("Server is running on port 3000..."));
