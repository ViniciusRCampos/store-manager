const salesModels = require('../models/sales.models');
const validations = require('./validations');
const status = require('./status');

const newSale = async (sales) => {
  const err = await validations.validations(sales);
  if (err) {
    return err;
  }

  const id = await salesModels.newSale(sales);
  return ({ id, itemsSold: sales });
};

const getAllSales = async () => {
  const sales = await salesModels.getAllSales();
  return sales;
};

const getSaleById = async (id) => {
  const sale = await salesModels.getSaleById(id);
  if (sale.length === 0) return { error: { status: status.NOT_FOUND, message: 'Sale not found' } };
  return sale;
};

module.exports = {
  newSale,
  getAllSales,
  getSaleById,
};