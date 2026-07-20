const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/authorize.middleware");

const {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
} = require("../controllers/category.controller");

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags:
 *       - Categories
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Electronics
 *               description:
 *                 type: string
 *                 example: Electronic devices and accessories
 *     responses:
 *       201:
 *         description: Category created successfully
 *       409:
 *         description: Category already exists
 *       401:
 *         description: Unauthorized
 */
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createCategory
);

router.get(
  "/",
  authenticate,
  getCategories
);

router.get(
  "/:id",
  authenticate,
  getCategoryById
);

router.put(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  updateCategoryById
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteCategoryById
);

module.exports = router;