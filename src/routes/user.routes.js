const express = require("express");

const router = express.Router();

const authenticate = require("../middlewares/auth.middleware");

router.get("/profile", authenticate, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected route accessed",
    user: req.user,
  });
});

module.exports = router;