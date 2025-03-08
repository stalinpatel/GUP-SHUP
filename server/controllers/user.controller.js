import { User } from "../models/user.model.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import { sendToken } from "../utilities/sendToken.utility.js";
import bcrypt from "bcryptjs";

export const register = asyncHandler(async (req, res, next) => {
  const { fullName, username, password, gender } = req.body;

  if (!fullName || !username || !password || !gender) {
    return next(new errorHandler("All Fields are required", 400));
  }

  const user = await User.findOne({ username });

  if (user) {
    return next(new errorHandler("User Already Exists", 400));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const avatarType = gender === "male" ? "boy" : "girl";
  const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`;
  const newUser = new User({
    fullName,
    username,
    password: hashedPassword,
    gender,
    avatar,
  });

  await newUser.save();
  sendToken(newUser, 200, res, "User registered successfully");
});

export const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new errorHandler("Username and Password are required", 400));
  }

  const user = await User.findOne({ username });

  if (!user) {
    return next(new errorHandler("Invalid credentials", 400));
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return next(new errorHandler("Invalid credentials", 401));
  }

  sendToken(user, 200, res, "User logged in successfully");
});

export const getProfile = asyncHandler(async (req, res, next) => {
  const profile = await User.findById(req?.userid);
  res.status(200).json({
    success: true,
    responseData: profile,
  });
});

export const logout = asyncHandler(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({ success: true, message: "Logout successfull" });
});
