const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Inventory Management API is running",
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  healthCheck,
};