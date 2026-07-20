const {
    findProductBySku,
    findProductById,
    findProductBySkuExceptId,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../repositories/product.repository");

const { findCategoryById } = require("../repositories/category.repository");

const AppError = require("../utils/AppError");

const create = async (data) => {
    const existingSku = await findProductBySku(data.sku);

    if (existingSku) {
        throw new AppError("SKU already exists", 409);
    }

    const category = await findCategoryById(data.categoryId);

    if (!category) {
        throw new AppError("Category not found", 404);
    }

    return await createProduct(data);
};

const findAll = async () => {
    return await getProducts();
};

const findOne = async (id) => {
    const product = await findProductById(id);

    if (!product) {
        throw new AppError("Product not found", 404);
    }

    return product;
};

const update = async (id, data) => {
    const product = await findProductById(id);

    if (!product) {
        throw new AppError("Product not found", 404);
    }

    const category = await findCategoryById(data.categoryId);

    if (!category) {
        throw new AppError("Category not found", 404);
    }

    const existingSku = await findProductBySkuExceptId(data.sku, id);

    if (existingSku) {
        throw new AppError("SKU already exists", 409);
    }

    return await updateProduct(id, data);
};

const remove = async (id) => {
    const product = await findProductById(id);

    if (!product) {
        throw new AppError("Product not found", 404);
    }

    await deleteProduct(id);
};

module.exports = {
    create,
    findAll,
    findOne,
    update,
    remove,
};