import "dotenv/config";
import express from "express";
import { connectDB } from "./db/connection1.db.js";

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON
console.log(PORT);

//ROUTES
import userRouter from "./routes/user.route.js";
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
