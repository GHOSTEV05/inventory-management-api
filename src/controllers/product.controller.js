const {
    createProductSchema,
    updateProductSchema,
} = require("../validators/product.validator");

const {
    create,
    findAll,
    findOne,
    update,
    remove,
} = require("../services/product.service");

const createProduct = async (req, res, next) => {
    try {
        const data = createProductSchema.parse(req.body);

        const product = await create(data);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

const getProducts = async (req, res, next) => {
    try {
        const products = await findAll();

        res.status(200).json({
            success: true,
            data: products,
        });
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const product = await findOne(Number(req.params.id));

        res.status(200).json({
            success: true,
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const data = updateProductSchema.parse(req.body);

        const product = await update(Number(req.params.id), data);

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: product,
        });
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        await remove(Number(req.params.id));

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};