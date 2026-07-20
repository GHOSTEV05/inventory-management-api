const { createCategorySchema } = require("../validators/category.validator");

const {
  create,
  findAll,
  findOne,
  update,
  remove,
} = require("../services/category.service");

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

const getCategories = async (req, res, next) => {
  try {
    const categories = await findAll();

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const category = await findOne(Number(req.params.id));

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const updateCategoryById = async (req, res, next) => {
  try {
    const data = createCategorySchema.parse(req.body);

    const category = await update(Number(req.params.id), data);

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCategoryById = async (req, res, next) => {
  try {
    await remove(Number(req.params.id));

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};