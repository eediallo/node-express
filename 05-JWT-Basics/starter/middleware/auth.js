import { UnauthenticatedError } from "../errors/index.js";
import jsonwebtoken from "jsonwebtoken";

export const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Token is not provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new UnauthenticatedError("No access allowed");
  }
};
