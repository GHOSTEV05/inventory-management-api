const {
    findUserByEmail,
    findUserWithRoleByEmail,
    findRoleByName,
    createUser,
} = require("../repositories/auth.repository");

const { generateToken } = require("../utils/jwt.util");
const {
    hashPassword,
    comparePassword,
} = require("../utils/password.util");
const AppError = require("../utils/AppError");

const register = async ({
    firstName,
    lastName,
    email,
    password,
    role,
}) => {
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        throw new AppError("Email already exists", 409);
    }

    const roleFound = await findRoleByName(role);

    if (!roleFound) {
        throw new AppError("Role not found", 404);
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

const login = async ({ email, password }) => {
    const user = await findUserWithRoleByEmail(email);

    if (!user) {
        throw new AppError("Invalid email or password", 401);
    }

    const isPasswordValid = await comparePassword(
        password,
        user.passwordHash
    );

    if (!isPasswordValid) {
        throw new AppError("Invalid email or password", 401);
    }

    const token = generateToken({
        id: user.id,
        email: user.email,
        role: user.role.name,
    });

    return {
        token,
        user,
    };
};

module.exports = {
    register,
    login,
};