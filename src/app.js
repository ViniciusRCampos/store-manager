const express = require('express');

const productsController = require('./controllers/products.controllers');
const salesController = require('./controllers/sales.controller');

// Project: Store Manager Vinicius Campos

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.getAllProducts); 

app.get('/products/:id', productsController.getProductById);

app.post('/products', productsController.create);

app.put('/products/:id', productsController.updateProduct);

app.delete('/products/:id', productsController.deleteProduct);

app.get('/sales', salesController.getAllSales); 

app.get('/sales/:id', salesController.getSaleById);

app.post('/sales', salesController.newSale);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;