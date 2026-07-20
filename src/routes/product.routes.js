const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/authorize.middleware");

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require("../controllers/product.controller");

router.post(
    "/",
    authenticate,
    authorize("ADMIN"),
    createProduct
);

router.get(
    "/",
    authenticate,
    getProducts
);

router.get(
    "/:id",
    authenticate,
    getProductById
);

router.put(
    "/:id",
    authenticate,
    authorize("ADMIN"),
    updateProduct
);

router.delete(
    "/:id",
    authenticate,
    authorize("ADMIN"),
    deleteProduct
);

module.exports = router;