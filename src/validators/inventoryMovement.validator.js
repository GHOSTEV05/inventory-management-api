const { z } = require("zod");

const createMovementSchema = z.object({
  type: z.enum([
    "PURCHASE",
    "SALE",
    "RESTOCK",
    "ADJUSTMENT",
  ]),

  quantity: z.number().int().positive(),

  productId: z.number().int().positive(),
});

module.exports = {
  createMovementSchema,
};