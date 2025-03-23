import { User } from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  //  // Check if the user has provided all the required fields ---> optional
  //   if (!name || !email || !password) {
  //     throw new BadRequestError("Please provide name, email and password");
  //   }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  const tempUser = { name, email, password: passwordHash };
  const user = await User.create({ ...tempUser });

  res.status(StatusCodes.CREATED).json({ user });
};
const loginUser = async (req, res) => {
  res.send("Login user route");
};

export { registerUser, loginUser };
