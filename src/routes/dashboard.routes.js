const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/auth.middleware");

const { dashboard } = require("../controllers/dashboard.controller");

router.get("/", authenticate, dashboard);

module.exports = router;