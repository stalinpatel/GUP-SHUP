import mongoose from "mongoose";

const DB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;
export const connectDB = async () => {
  try {
    const instance = await mongoose.connect(DB_URI);
    // const instance = await mongoose.connect(`${DB_URI}/${DB_NAME}`);
    console.log(`Database connected !! Host : ${instance.connection.host}`);
  } catch (error) {
    console.error("Failed to connect to mongoDB");
    process.exit(1);
  }
};
