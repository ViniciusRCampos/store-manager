const productsServices = require('../services/products.services');

const getAllProducts = async (_req, res) => {
  const products = await productsServices.getAllProducts();
  res.status(200).json(products);
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  const product = await productsServices.getProductById(id);
  if (!product.error) {
    res.status(200).json(product);
  } else {
    const { status } = product.error;
    res.status(status).json(product.error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};