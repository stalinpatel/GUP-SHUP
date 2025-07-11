import { errorHandler } from "../utilities/errorHandler.utility.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return next(new errorHandler("Invalid token", 400));
  }
  const tokenData = jwt.verify(token, process.env.JWT_SECRET);
  req.userid = tokenData?._id;

  next();
});
