// check if username and password in post (login) request
// if exist create new JWT
// send back to front-end

// setup authentication so only the request with JWT can access the dashboard
import { BadRequestError } from "../errors/index.js";
import jsonwebtoken from "jsonwebtoken";
import crypto from "crypto";

export const login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  /**
   * Options to valid user
   *   1. Mongoose
   *   2. Third party
   *   3. Check in controller
   */

  if (!username || !password) {
    throw new BadRequestError("Please provide username and password");
  }

  try {
    const id = crypto.randomUUID();
    const token = jsonwebtoken.sign(
      { username: username, id: id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ msg: "User logged in successfully", token });
  } catch (err) {
    console.error(err);
  }
};

export const dashboard = (req, res) => {
  console.log(req.user);
  const secretNumber = Math.floor(Math.random() * 1000);
  res.status(200).json({
    msg: `Welcome ${req.user.username}. Here is your secret number to access the data: ${secretNumber}`,
  });
};
