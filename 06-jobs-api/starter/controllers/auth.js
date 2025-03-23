import { User } from "../models/User.js";
import { StatusCodes } from "http-status-codes";
const registerUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};
const loginUser = async (req, res) => {
  res.send("Login user route");
};

export { registerUser, loginUser };
