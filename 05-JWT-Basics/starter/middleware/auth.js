import { CustomAPIError } from "../errors/custom-error.js";
import jsonwebtoken from "jsonwebtoken";

export const authenticationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("Token is not provided", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new CustomAPIError("No access allowed", 401);
  }
};
