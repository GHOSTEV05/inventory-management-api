const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/authorize.middleware");

const {
  createProduct,
} = require("../controllers/product.controller");

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createProduct
);

module.exports = router;