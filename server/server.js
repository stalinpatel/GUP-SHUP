import "dotenv/config";
import express from "express";
import { connectDB } from "./db/connection1.db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";

connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      process.env.CLIENT_URL,
    ],
    credentials: true,
  })
);

//ROUTES
import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", messageRouter);

//MIDDLEWARES
import { errorMiddleware } from "./middlewares/error.middleware.js";
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("You have hit on the home end point");
});

server.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
