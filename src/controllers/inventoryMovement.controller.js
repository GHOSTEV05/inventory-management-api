const {
  createMovementSchema,
} = require("../validators/inventoryMovement.validator");

const {
  create,
  findAll,
  findOne,
} = require("../services/inventoryMovement.service");

const createMovement = async (req, res, next) => {
  try {
    const data = createMovementSchema.parse(req.body);

    const movement = await create(data, req.user.id);

    res.status(201).json({
      success: true,
      message: "Inventory movement created successfully",
      data: movement,
    });
  } catch (error) {
    next(error);
  }
};

const getMovements = async (req, res, next) => {
  try {
    const movements = await findAll();

    res.status(200).json({
      success: true,
      data: movements,
    });
  } catch (error) {
    next(error);
  }
};

const getMovementById = async (req, res, next) => {
  try {
    const movement = await findOne(Number(req.params.id));

    res.status(200).json({
      success: true,
      data: movement,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMovement,
  getMovements,
  getMovementById,
};