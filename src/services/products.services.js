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

const updateProduct = async ({ name, id }) => {
   const { error } = productSchemas.validate({ name });
  if (error) {
    if (error.details[0].type === 'string.min') {
      return { status: status.UNPROCESSABLE_ENTITY, message: error.message };
    }
    return { status: status.BAD_REQUEST, message: error.message };
  }
  const product = await productsModels.updateProduct({ name, id });
  if (product === 0) return { status: status.NOT_FOUND, message: 'Product not found' };
  return product;
};

const deleteProduct = async (id) => {
  const product = await productsModels.getProductById(id);
  if (product) {
    const result = await productsModels.deleteProduct(id);
    return result;
  }
  return ({ status: status.NOT_FOUND, message: 'Product not found' });
};

module.exports = {
  getAllProducts,
  getProductById,
  create,
  updateProduct,
  deleteProduct,
};