const prisma = require("../config/prisma");

const countProducts = () => {
  return prisma.product.count();
};

const countCategories = () => {
  return prisma.category.count();
};

const countUsers = () => {
  return prisma.user.count();
};

const countLowStockProducts = () => {
  return prisma.product.count({
    where: {
      stock: {
        lte: prisma.product.fields.minimumStock,
      },
    },
  });
};

const getRecentMovements = () => {
  return prisma.inventoryMovement.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      product: {
        select: {
          id: true,
          name: true,
        },
      },
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
};

const getInventoryValue = () => {
  return prisma.product.findMany({
    select: {
      price: true,
      stock: true,
    },
  });
};

module.exports = {
  countProducts,
  countCategories,
  countUsers,
  countLowStockProducts,
  getRecentMovements,
  getInventoryValue,
};