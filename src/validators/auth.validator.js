const { z } = require("zod");

const registerSchema = z.object({
  firstName: z
  .string()
  .min(2, "First name must contain at least 2 characters")
  .max(50, "First name cannot exceed 50 characters"),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["ADMIN", "EMPLOYEE"]),
});

module.exports = {
  registerSchema,
};