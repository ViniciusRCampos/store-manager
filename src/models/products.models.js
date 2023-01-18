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

const updateProduct = async ({ name, id }) => {
  const query = `UPDATE products
  SET name = ?
  WHERE id = ?`;
  const [executeQuery] = await connection.execute(query, [name, id]);
  return executeQuery.affectedRows;
};

const deleteProduct = async (id) => {
  const query = `DELETE FROM products
  WHERE id = ?`;
  const [result] = await connection.execute(query, [id]);
  return result.affectedRows;
};

module.exports = {
  getAllProducts,
  getProductById,
  create,
  maxProductId,
  updateProduct,
  deleteProduct,
};