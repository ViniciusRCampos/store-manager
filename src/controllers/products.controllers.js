const productsServices = require('../services/products.services');

const getAllProducts = async (_req, res) => {
  const products = await productsServices.getAllProducts();
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productsServices.getProductById(id);
  if (!product.error) {
    res.status(200).json(product);
  } else {
    const { status } = product.error;
    res.status(status).json(product.error);
  }
};

const create = async (req, res) => {
  const { name } = req.body;
  const newProduct = await productsServices.create({ name });
    if (!newProduct.status) {
    res.status(201).json(newProduct);
  } else {
    const { status } = newProduct;
    res.status(status).json(newProduct);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  create,
};