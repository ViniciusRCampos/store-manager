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

const create = async ({ name }) => {
  const query = 'INSERT INTO products (name) VALUES(?)';
  const [newProduct] = await connection.execute(query, [name]);
  return newProduct.insertId;
};

const maxProductId = async () => {
  const query = 'SELECT MAX(id) as id FROM products';
  const [[maxId]] = await connection.execute(query);
  return maxId.id;
};

module.exports = {
  getAllProducts,
  getProductById,
  create,
  maxProductId,
};