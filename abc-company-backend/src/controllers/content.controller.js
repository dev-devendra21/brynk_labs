import {
  getContentService,
  createContentService,
} from "../services/content.service.js";

async function getContent(req, res) {
  const data = await getContentService();
  res
    .status(200)
    .json({ data, message: "Content fetched successfully", success: true });
}

async function createContent(req, res) {
  const data = await createContentService(req);

  res.status(201).json({
    data,
    message: "Content created successfully",
    success: true,
  });
}

export { getContent, createContent };
