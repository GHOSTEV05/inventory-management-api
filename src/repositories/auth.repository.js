const prisma = require("../config/prisma");

const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

const findUserWithRoleByEmail = async (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      role: true,
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
  findUserWithRoleByEmail,
  findRoleByName,
  createUser,
};