const { registerSchema } = require("../validators/auth.validator");
const { register } = require("../services/auth.service");

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

module.exports = {
  registerUser,
};