const salesModels = require('../models/sales.models');
const validations = require('./validations');

const newSale = async (sales) => {
  // const maxId = await productModels.maxProductId();
  // for (let i = 0; i < sales.length; i++) {
  //   const { error } = saleSchemas.validate(sales[i]);
  //   if (sales[i].productId > maxId) {
  //    const err = { status: 404, message: 'Product not found' };
  //     return err;
  //   }
  //   if (error) {
  //     if (error.details[0].type === 'any.required') {
  //      const err = { status: 400, message: error.message };
  //       return err;
  //     }
  //     if (error.details[0].type === 'number.min') {
  //      const err = { status: 422, message: error.message };
  //       return err;
  //     }
  //   }
  //   continue;
  // }

  const err = await validations.validations(sales);
  if (err) {
    return err;
  }

  const id = await salesModels.newSale(sales);
  return ({ id, itemsSold: sales });
};

module.exports = {
  newSale,
};