const prisma = require("../config/prisma");

const createMovement = (tx, data) => {
  return tx.inventoryMovement.create({
    data,
    include: {
      product: true,
      user: true,
    },
  });
};

const getMovements = () => {
  return prisma.inventoryMovement.findMany({
    include: {
      product: true,
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const findMovementById = (id) => {
  return prisma.inventoryMovement.findUnique({
    where: { id },
    include: {
      product: true,
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
        },
      },
    },
  });
};

module.exports = {
  createMovement,
  getMovements,
  findMovementById,
};