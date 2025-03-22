// check if username and password in post (login) request
// if exist create new JWT
// send back to front-end

import { CustomAPIError } from "../errors/custom-error.js";

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
  res.status(200).json({ msg: `Welcome ${username}` });
};

export const dashboard = (req, res) => {
  const secretNumber = Math.floor(Math.random() * 1000);
  res.status(200).json({
    msg: `Welcome Elhadj. Here is your secret number to access the data: ${secretNumber}`,
  });
};
