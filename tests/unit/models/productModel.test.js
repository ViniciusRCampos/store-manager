const { expect } = require("chai");
const sinon = require("sinon");

const mockProducts = require('../mocks/Products/mocks');

const connection = require('../../../src/models/connection');

const productModel = require('../../../src/models/products.models');

describe('Testando camada Model, products', () => {
  afterEach(sinon.restore)
  it('Testing route /products, get all products', async () => {
    sinon.stub(connection, 'execute')
      .resolves([mockProducts.allProducts]);
    
    const result = await productModel.getAllProducts();

    expect(result).to.be.deep.equal(mockProducts.allProducts);
  });
  it('Testing route /products/:id, get product by id', async () => {
    sinon.stub(connection, 'execute')
      .resolves([mockProducts.productById]);
    
    const result = await productModel.getProductById(1);

    expect(result).to.be.deep.equal(mockProducts.productById[0]);
  });

  it('Testing route /products, post create product', async () => {
    sinon.stub(connection, 'execute')
      .resolves([1]);
    const result = await productModel.create({ name: 'Manopla do Atanes' });
    
    console.log(result)

    expect(result).to.be.equal(1);
  })

})