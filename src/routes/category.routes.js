const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/authorize.middleware");

const {
  createCategory,
} = require("../controllers/category.controller");

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createCategory
);

module.exports = router;