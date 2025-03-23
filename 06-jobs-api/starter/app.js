import "dotenv/config";
import express from "express";
import "express-async-errors";
const app = express();

// error handler
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";

app.use(express.json());
// extra packages

// routes
app.get("/", (req, res) => {
  res.send("jobs api");
});

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
