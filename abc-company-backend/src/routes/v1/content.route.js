import express from "express";
import {
  createContent,
  getContent,
} from "../../controllers/content.controller.js";
import { createContentSchema } from "../../validators/content.validator.js";
import { validateRequestBody } from "../../validators/index.js";

const router = express.Router();

router.get("/", getContent);
router.post("/", validateRequestBody(createContentSchema), createContent);

export default router;
