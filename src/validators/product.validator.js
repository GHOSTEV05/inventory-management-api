const { z } = require("zod");

const createProductSchema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),

  description: z.string().optional(),

  sku: z.string().min(3, "SKU must have at least 3 characters"),

  price: z.number().positive("Price must be greater than zero"),

  stock: z.number().int().min(0, "Stock cannot be negative"),

  minimumStock: z.number().int().min(0, "Minimum stock cannot be negative"),

  categoryId: z.number().int().positive("Category is required"),
});

module.exports = {
  createProductSchema,
};