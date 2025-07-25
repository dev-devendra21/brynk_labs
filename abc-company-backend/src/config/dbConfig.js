import mongoose from "mongoose";
import serverConfig from "./serverConfig.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(serverConfig.mongoUrl);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
