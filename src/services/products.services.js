const Joi = require('joi');
const productsModels = require('../models/products.models');
const status = require('./status');

const productSchemas = Joi.object({
  name: Joi.string().min(5).required(),
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
  if (error) {
    if (error.details[0].type === 'string.min') {
      return { status: status.UNPROCESSABLE_ENTITY, message: error.message };
    }
    return { status: status.BAD_REQUEST, message: error.message };
  }
  const id = await productsModels.create({ name });
  return { id, name };
};

module.exports = {
  getAllProducts,
  getProductById,
  create,
};