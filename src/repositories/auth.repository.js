const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

const findRoleByName = async (role) => {
  return prisma.role.findUnique({
    where: {
      name: role,
    },
  });
};

const createUser = async (userData) => {
  return prisma.user.create({
    data: userData,
  });
};

module.exports = {
  findUserByEmail,
  findRoleByName,
  createUser,
};