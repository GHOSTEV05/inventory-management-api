const {
    countProducts,
    countCategories,
    countUsers,
    countLowStockProducts,
    getRecentMovements,
    getInventoryValue,
} = require("../repositories/dashboard.repository");

const getDashboard = async () => {
    const [
        totalProducts,
        totalCategories,
        totalUsers,
        lowStockProducts,
        recentMovements,
        inventory,
    ] = await Promise.all([
        countProducts(),
        countCategories(),
        countUsers(),
        countLowStockProducts(),
        getRecentMovements(),
        getInventoryValue(),
    ]);

    const totalInventoryValue = inventory.reduce((total, product) => {
        return total + Number(product.price) * product.stock;
    }, 0);

    return {
        totalProducts,
        totalCategories,
        totalUsers,
        lowStockProducts,
        totalInventoryValue,
        recentMovements,
    };
};

module.exports = {
    getDashboard,
};