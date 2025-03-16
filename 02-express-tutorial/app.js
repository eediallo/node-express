import express from "express";

import { router } from "./routes/people.js";

const staticDIr = new URL("./methods-public", import.meta.url).pathname;

const app = express();

// static assets
app.use(express.static(staticDIr));

// parse json
app.use(express.json());

// serves people router
app.use("/api/people", router);

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(404).send("user not found");
  }
  res.status(200).send(`Welcome ${name}`);
});

app.listen(3000, () => console.log("Server is running on port 3000..."));
