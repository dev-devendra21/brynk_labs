import dotenv from "dotenv";

const loadEnv = () => {
  dotenv.config();
  console.log("Environment variables loaded");
};

loadEnv();

const serverConfig = {
  port: process.env.PORT || 4000,
  mongoUrl: process.env.MONGO_URL,
};

export default serverConfig;
