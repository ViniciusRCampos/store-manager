const { expect } = require("chai");
const sinon = require("sinon");

const mockProducts = require('../mocks/Products/mocks');

const productServices = require('../../../src/services/products.services');

const productModel = require('../../../src/models/products.models');

describe('Testing service, products', () => {
  afterEach(sinon.restore)
  it('Testing route /products, get all products', async () => {
    sinon.stub(productModel, 'getAllProducts')
      .resolves(mockProducts.allProducts);
    
    const result = await productServices.getAllProducts();

    expect(result).to.be.deep.equal(mockProducts.allProducts);
  })

    it('Testing route /products/:id, get products by id', async () => {
    sinon.stub(productModel, 'getProductById')
      .resolves(mockProducts.productById);
    
      const result = await productServices.getProductById();
      

    expect(result).to.be.deep.equal(mockProducts.productById);
    })
  
      it('Testing route /products, post', async () => {
    sinon.stub(productModel, 'create')
      .resolves({insertId: 4});
    
        const result = await productServices.create({ name: 'Manopla do Atanes' });

    expect(result).to.be.deep.equal({ id: 4, name: 'Manopla do Atanes' });
  })

});