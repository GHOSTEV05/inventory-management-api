const { registerSchema, loginSchema } = require("../validators/auth.validator");

const { register, login } = require("../services/auth.service");

const registerUser = async (req, res, next) => {
  try {
    const data = registerSchema.parse(req.body);

    const user = await register(data);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const data = loginSchema.parse(req.body);

    const { token, user } = await login(data);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role.name,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};