import z from "zod";

const createContentSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
});

export { createContentSchema };
