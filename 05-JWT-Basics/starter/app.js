import "dotenv/config";
import express from "express";
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import { route } from "./routes/main.js";

const app = express();

const publicDir = new URL("./public", import.meta.url).pathname;

// middleware
app.use(express.static(publicDir));
app.use(express.json());

app.use("/api/v1", route);
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
