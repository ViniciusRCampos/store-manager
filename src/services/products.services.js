const Joi = require('joi');
const productsModels = require('../models/products.models');
const status = require('./status');

const productSchemas = Joi.object({
  name: Joi.string().min(3).required(),
});

const getAllProducts = async () => {
  const products = await productsModels.getAllProducts();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModels.getProductById(id);
  if (!product) return { error: { status: status.NOT_FOUND, message: 'Product not found' } };
  return product;
};

const create = async ({ name }) => {
  const { error } = productSchemas.validate({ name });
  if (error) return { status: status.BAD_REQUEST, message: error.message };
  const id = await productsModels.create({ name });
  console.log(id, name, 'test');
  return { id, name };
};

module.exports = {
  getAllProducts,
  getProductById,
  create,
};