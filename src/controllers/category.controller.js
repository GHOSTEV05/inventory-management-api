const { createCategorySchema } = require("../validators/category.validator");

const { create } = require("../services/category.service");

const createCategory = async (req, res, next) => {
  try {
    const data = createCategorySchema.parse(req.body);

    const category = await create(data);

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
};