const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Inventory Management API is running."
    });
});

module.exports = app;