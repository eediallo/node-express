import express from "express";
import { login, dashboard } from "../controllers/main.js";

const route = express.Router();

route.post("/login", login);
route.get("/dashboard", dashboard);

export { route };
