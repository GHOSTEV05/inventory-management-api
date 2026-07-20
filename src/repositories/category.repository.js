const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findCategoryByName = (name) => {
  return prisma.category.findUnique({
    where: { name },
  });
};

const findCategoryById = (id) => {
  return prisma.category.findUnique({
    where: { id },
  });
};

const getCategories = () => {
  return prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
};

const createCategory = (data) => {
  return prisma.category.create({
    data,
  });
};

const updateCategory = (id, data) => {
  return prisma.category.update({
    where: { id },
    data,
  });
};

const deleteCategory = (id) => {
  return prisma.category.delete({
    where: { id },
  });
};

module.exports = {
  findCategoryByName,
  findCategoryById,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};