const connection = require('./connection');

const newSale = async (sales) => {
  const query = 'INSERT INTO sales (date) values (NOW())';
  const [saleId] = await connection.execute(query);
  const idSale = saleId.insertId;
  const promises = [];
  sales.forEach((element) => {
    const insertQuery = `INSERT INTO sales_products
      (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
    const insert = connection.execute(insertQuery, [idSale, element.productId, element.quantity]);
    promises.push(insert);
  });
  await Promise.all(promises);
  return idSale;
};

const getAllSales = async () => {
  const query = `SELECT b.sale_id as saleId, 
  a.date, b.product_id as productId, b.quantity  FROM sales a
  INNER JOIN sales_products b on (a.id = b.sale_id)
  ORDER BY b.sale_id, product_id`;
  const [sales] = await connection.execute(query);
  return sales;
};

const getSaleById = async (id) => {
  const query = `SELECT a.date, 
  b.product_id as productId, b.quantity  FROM sales a
  INNER JOIN sales_products b on (a.id = b.sale_id)
  WHERE b.sale_id = ?
  ORDER BY b.sale_id, product_id`;
  const [sale] = await connection.execute(query, [id]);
  return sale;
};

module.exports = {
  newSale,
  getAllSales,
  getSaleById,
};