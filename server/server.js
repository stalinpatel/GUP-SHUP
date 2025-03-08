import "dotenv/config";
import express from "express";
import { connectDB } from "./db/connection1.db.js";
import cookieParser from "cookie-parser";

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON
app.use(cookieParser());

//ROUTES
import userRouter from "./routes/user.route.js";
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//MIDDLEWARES
import { errorMiddleware } from "./middlewares/error.middleware.js";
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
  console.log(process.env.LOCAL_HOST_URI);
});
