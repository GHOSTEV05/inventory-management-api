const prisma = require("../config/prisma");

const findProductBySku = (sku) => {
    return prisma.product.findUnique({
        where: { sku },
    });
};

const findProductById = (id) => {
    return prisma.product.findUnique({
        where: { id },
        include: {
            category: true,
        },
    });
};

const getProducts = () => {
    return prisma.product.findMany({
        include: {
            category: true,
        },
        orderBy: {
            name: "asc",
        },
    });
};

const createProduct = (data) => {
    return prisma.product.create({
        data,
        include: {
            category: true,
        },
    });
};

const updateProduct = (id, data) => {
    return prisma.product.update({
        where: { id },
        data,
        include: {
            category: true,
        },
    });
};

const findProductBySkuExceptId = async (sku, id) => {
    return prisma.product.findFirst({
        where: {
            sku,
            NOT: {
                id,
            },
        },
    });
};

const deleteProduct = (id) => {
  return prisma.product.delete({
    where: { id },
  });
};

module.exports = {
    findProductBySku,
    findProductById,
    getProducts,
    createProduct,
    updateProduct,
    findProductBySkuExceptId,
    deleteProduct,
};