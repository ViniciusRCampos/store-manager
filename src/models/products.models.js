const connection = require('./connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM products';
  const [products] = await connection.execute(query);
  return products;
};

const getProductById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [[product]] = await connection.execute(query, [id]);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
};