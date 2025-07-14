import express from "express";
import contentRoute from "./content.route.js";

const router = express.Router();

router.use("/content", contentRoute);

export default router;
