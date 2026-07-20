const express = require("express");
const router = express.Router();

const healthRoutes = require("./health.routes");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");
const productRoutes = require("./product.routes");
const inventoryMovementRoutes = require("./inventoryMovement.routes");
const dashboardRoutes = require("./dashboard.routes");

router.use("/health", healthRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/inventory-movements", inventoryMovementRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;