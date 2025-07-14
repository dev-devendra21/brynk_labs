import Content from "../models/contentModel.js";

async function getContentRepository() {
  try {
    const result = await Content.findOne();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function createContentRepository(data) {
  try {
    const { title } = data;
    await Content.deleteMany({});
    const result = await Content.create({ title });
    return result;
  } catch (error) {
    console.error(error);
  }
}

export { getContentRepository, createContentRepository };
