// check if username and password in post (login) request
// if exist create new JWT
// send back to front-end

import { CustomAPIError } from "../errors/custom-error.js";
import jsonwebtoken from "jsonwebtoken";

// setup authentication so only the request with JWT can access the dashboard

export const login = (req, res) => {
  const { username, password } = req.body;
  /**
   * Options to valid user
   *   1. Mongoose
   *   2. Third party
   *   3. Check in controller
   */

  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }

  // implement jwt token
  const id = Math.floor(Date.now() / 1000) + 60 * 60; // do this until DB is setup.
  const token = jsonwebtoken.sign(
    { username: username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.status(200).json({ token });
};

export const dashboard = (req, res) => {
  // handle token in controller

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomAPIError("Token is not provided", 401);
  }

  const token = authHeader.split(" ")[1];
  console.log(token);

  try {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    const secretNumber = Math.floor(Math.random() * 1000);
    res.status(200).json({
      msg: `Welcome ${decoded.username}. Here is your secret number to access the data: ${secretNumber}`,
    });
  } catch (err) {
    throw new CustomAPIError("No access allowed", 401);
  }
};
