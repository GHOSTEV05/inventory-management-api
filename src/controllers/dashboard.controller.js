const { getDashboard } = require("../services/dashboard.service");

const dashboard = async (req, res, next) => {
    try {
        const data = await getDashboard();

        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    dashboard,
};