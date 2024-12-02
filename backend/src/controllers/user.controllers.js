import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { name, dob, email, password } = req.body;

  if (!name || !dob || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res.status(409).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      dob,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(201).json({
      token,
      user: { name: user.name, email: user.email, dob: user.dob },
      message: "User registered successfully!",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error while registering the user" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required!" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User doesnot exists!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      token,
      user: { name: user.name, email: user.email, dob: user.dob },
      message: "Login successful!",
    });
  } catch (err) {
    return res.status(500).json({ message: "Error while logging in!" });
  }
};
