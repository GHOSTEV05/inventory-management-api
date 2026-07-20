const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findCategoryByName = (name) => {
  return prisma.category.findUnique({
    where: {
      name,
    },
  });
};

const createCategory = (data) => {
  return prisma.category.create({
    data,
  });
};

module.exports = {
  findCategoryByName,
  createCategory,
};