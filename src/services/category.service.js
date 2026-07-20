const {
  findCategoryByName,
  createCategory,
} = require("../repositories/category.repository");

const AppError = require("../utils/AppError");

const create = async ({ name, description }) => {
  const existingCategory = await findCategoryByName(name);

  if (existingCategory) {
    throw new AppError("Category already exists", 409);
  }

  const category = await createCategory({
    name,
    description,
  });

  return category;
};

module.exports = {
  create,
};