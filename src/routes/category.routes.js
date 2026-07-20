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