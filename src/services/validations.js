const Joi = require('joi');
const productModels = require('../models/products.models');

const saleSchemas = Joi.object({
  productId: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
});

const schemas = async (error) => {
  if (error.details[0].type === 'any.required') {
    return { status: 400, message: error.message };
  }
  if (error.details[0].type === 'number.min') {
    return { status: 422, message: error.message };
  }
};

const id = async (sales) => {
    const maxId = await productModels.maxProductId();
    for (let i = 0; i < sales.length; i += 1) {
      if (sales[i].productId > maxId) {
        return { status: 404, message: 'Product not found' };
      }
    }
  };

const validations = async (sales) => {
  const idValidation = await id(sales);
  if (idValidation) {
    return idValidation;
  }
  for (let i = 0; i < sales.length; i += 1) {
    const { error } = saleSchemas.validate(sales[0]);
    if (error) {
      return schemas(error);
    }
  }
};

module.exports = {
  validations,
};