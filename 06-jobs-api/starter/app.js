import "dotenv/config";
import express from "express";
import "express-async-errors";
import authRouter from "./routes/auth.js";
import jobRouter from "./routes/jobs.js";
import { connectDB } from "./db/connect.js";
const app = express();

// error handler
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";

app.use(express.json());
// extra packages

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database connected...");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
