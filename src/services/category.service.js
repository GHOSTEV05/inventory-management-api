const {
  findCategoryByName,
  findCategoryById,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../repositories/category.repository");

const AppError = require("../utils/AppError");

const create = async ({ name, description }) => {
  const existingCategory = await findCategoryByName(name);

  if (existingCategory) {
    throw new AppError("Category already exists", 409);
  }

  return await createCategory({
    name,
    description,
  });
};

const findAll = async () => {
  return await getCategories();
};

const findOne = async (id) => {
  const category = await findCategoryById(id);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

const update = async (id, data) => {
  await findOne(id);

  return await updateCategory(id, data);
};

const remove = async (id) => {
  await findOne(id);

  await deleteCategory(id);
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  remove,
};