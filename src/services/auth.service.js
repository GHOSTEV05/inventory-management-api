const {
  findUserByEmail,
  findRoleByName,
  createUser,
} = require("../repositories/auth.repository");

const { hashPassword } = require("../utils/password.util");

const register = async ({
  firstName,
  lastName,
  email,
  password,
  role,
}) => {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const roleFound = await findRoleByName(role);

  if (!roleFound) {
    throw new Error("Role not found");
  }

  const passwordHash = await hashPassword(password);

  const user = await createUser({
    firstName,
    lastName,
    email,
    passwordHash,
    roleId: roleFound.id,
  });

  return user;
};

module.exports = {
  register,
};