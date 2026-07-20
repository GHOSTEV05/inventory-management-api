const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/auth.middleware");
const authorize = require("../middlewares/authorize.middleware");

const {
  createMovement,
  getMovements,
  getMovementById,
} = require("../controllers/inventoryMovement.controller");

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createMovement
);

router.get(
  "/",
  authenticate,
  getMovements
);

router.get(
  "/:id",
  authenticate,
  getMovementById
);

module.exports = router;