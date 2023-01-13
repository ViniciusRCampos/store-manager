const productsModels = require('../models/products.models');
const status = require('./status');

const getAllProducts = async () => {
  const products = await productsModels.getAllProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModels.getProductById(id);
  if (!product) return { error: { status: status.NOT_FOUND, message: 'Product not found' } };
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};