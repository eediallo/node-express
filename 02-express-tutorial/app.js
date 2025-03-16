import express from "express";

import { PeopleRouter } from "./routes/people.js";
import { loginRouter } from "./routes/login.js";

const staticDIr = new URL("./methods-public", import.meta.url).pathname;

const app = express();

// static assets
app.use(express.static(staticDIr));

// parse json
app.use(express.json());

// serves people router
app.use("/api/people", PeopleRouter);

// login router
app.use("/login", loginRouter);

app.listen(3000, () => console.log("Server is running on port 3000..."));
