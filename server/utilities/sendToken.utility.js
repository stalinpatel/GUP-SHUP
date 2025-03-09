import jwt from "jsonwebtoken";

export const sendToken = (user, statusCode, res, message) => {
  const tokenData = {
    _id: user?._id,
  };

  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES || "7d",
  });

  res
    .status(statusCode)
    .cookie("token", token, {
      maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // ✅ Only use Secure in Production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // ✅ Use "lax" in dev to avoid errors
    })
    .json({
      success: true,
      responseData: {
        user,
        message,
        token,
      },
    });
};
