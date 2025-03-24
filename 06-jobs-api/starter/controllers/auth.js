import { User } from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/unauthenticated.js";
import jsonwebtoken from "jsonwebtoken";

const registerUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = await user.createJWT();
  res.status(StatusCodes.CREATED).json({ name: user.name, token });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  // compare password
  const isMatch = await user.comparePasswords(password);
  if (!isMatch) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  const token = await user.createJWT();

  res.status(StatusCodes.OK).json({ name: user.name, token });
};

export { registerUser, loginUser };
