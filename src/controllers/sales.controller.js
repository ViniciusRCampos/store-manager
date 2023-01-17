const salesServices = require('../services/sales.services');

const newSale = async (req, res) => {
  const sales = req.body;
  const sale = await salesServices.newSale(sales);
  if (sale.status) return res.status(sale.status).json(sale);
  return res.status(201).json(sale);
};

const getAllSales = async (_req, res) => {
  const sales = await salesServices.getAllSales();
  res.status(200).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesServices.getSaleById(id);
  if (!sale.error) {
    res.status(200).json(sale);
  } else {
    const { status } = sale.error;
    res.status(status).json(sale.error);
  }
};

module.exports = {
  newSale,
  getSaleById,
  getAllSales,
};