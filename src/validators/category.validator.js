const { z } = require("zod");

const createCategorySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Category name must have at least 2 characters")
    .max(50, "Category name cannot exceed 50 characters"),

  description: z
    .string()
    .trim()
    .max(255, "Description cannot exceed 255 characters")
    .optional(),
});

module.exports = {
  createCategorySchema,
};