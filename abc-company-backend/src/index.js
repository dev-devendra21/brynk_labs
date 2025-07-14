import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.route.js";
import connectDB from "./config/dbConfig.js";
import serverConfig from "./config/serverConfig.js";
import { createServer } from "http";

const app = express();
const server = createServer(app);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/api", indexRouter);

server.listen(serverConfig.port, () => {
  connectDB()
    .then(() => {
      console.log(
        `Server is running on port http://localhost:${serverConfig.port}`
      );
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
});
