const prisma = require("../config/prisma");

const {
    findProductById,
    updateStock,
} = require("../repositories/product.repository");

const {
    createMovement,
    getMovements,
    findMovementById,
} = require("../repositories/inventoryMovement.repository");


const AppError = require("../utils/AppError");

const create = async ({ type, quantity, productId }, userId) => {
    const product = await findProductById(productId);

    if (!product) {
        throw new AppError("Product not found", 404);
    }

    let newStock = product.stock;

    switch (type) {
        case "PURCHASE":
        case "RESTOCK":
            newStock += quantity;
            break;

        case "SALE":
            if (product.stock < quantity) {
                throw new AppError("Insufficient stock", 400);
            }

            newStock -= quantity;
            break;

        case "ADJUSTMENT":
            newStock = quantity;
            break;
    }

    const movement = await prisma.$transaction(async (tx) => {
        await updateStock(tx, productId, newStock);

        return await createMovement(tx, {
            type,
            quantity,
            productId,
            userId,
        });
    });

    return movement;
};

const findAll = async () => {
    return await getMovements();
};

const findOne = async (id) => {
    const movement = await findMovementById(id);

    if (!movement) {
        throw new AppError("Inventory movement not found", 404);
    }

    return movement;
};

module.exports = {
    create,
    findAll,
    findOne,
};