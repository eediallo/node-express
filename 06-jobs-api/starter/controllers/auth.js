import { User } from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import jsonwebtoken from "jsonwebtoken";

const registerUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.getToken();
  res.status(StatusCodes.CREATED).json({ name: user.name, token });
};
const loginUser = async (req, res) => {
  res.send("Login user route");
};

export { registerUser, loginUser };
