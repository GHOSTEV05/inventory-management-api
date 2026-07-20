const { createProductSchema } = require("../validators/product.validator");

const { create } = require("../services/product.service");

const createProduct = async (req, res, next) => {
  try {
    const data = createProductSchema.parse(req.body);

    const product = await create(data);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
};