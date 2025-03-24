import { User } from "../models/User.js";
import jsonwebtoken from "jsonwebtoken";
import { UnauthenticatedError } from "../errors/unauthenticated.js";

export const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    // attach the user to the request object
    const { userId, name } = payload;
    req.user = { userId, name: name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Invalid credentials");
  }
};
