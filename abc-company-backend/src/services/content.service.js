import {
  getContentRepository,
  createContentRepository,
} from "../repositories/content.repository.js";

export async function getContentService() {
  const data = await getContentRepository();
  return data;
}

export async function createContentService(req) {
  const data = req.body;
  const result = await createContentRepository(data);
  return result;
}
