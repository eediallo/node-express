import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {
  errorHandlerMiddleware,
} from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";
import { connectDB } from "./db/connect.js";
const app = express();

const port = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send('<h1> Store API</h1><a href="/api/v1/products">Products route</a>');
});

app.use(errorHandlerMiddleware);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Successfully connected to database");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (err) {
    console.error(err.message);
  }
};

start();
