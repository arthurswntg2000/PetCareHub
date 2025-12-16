// middleware/notFound.js

module.exports = (req, res) => {
  res.status(404).json({
    success: false,
    error: "Rota não encontrada."
  });
};
