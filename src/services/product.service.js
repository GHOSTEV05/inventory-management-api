const {
  findProductBySku,
  createProduct,
} = require("../repositories/product.repository");

const { findCategoryById } = require("../repositories/category.repository");

const AppError = require("../utils/AppError");

const create = async (data) => {
  const existingSku = await findProductBySku(data.sku);

  if (existingSku) {
    throw new AppError("SKU already exists", 409);
  }

  const category = await findCategoryById(data.categoryId);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return await createProduct(data);
};

module.exports = {
  create,
};