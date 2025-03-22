import express from "express";
import { login, dashboard } from "../controllers/main.js";
import { authenticationMiddleware } from "../middleware/auth.js";

const route = express.Router();

route.post("/login", login);
route.get("/dashboard", authenticationMiddleware, dashboard);

export { route };
