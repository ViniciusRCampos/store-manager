const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const mockProducts = require('../mocks/Products/mocks');

const productServices = require('../../../src/services/products.services');

const productController = require('../../../src/controllers/products.controllers');

describe('Testing controller, products', () => {
  afterEach(sinon.restore)
  it('Testing route /products, get all products', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productServices, 'getAllProducts')
      .resolves(mockProducts.allProducts);
    
    await productController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProducts.allProducts);
  })

  it('Testing route /products, get products by id', async () => {
    const res = {};
    const req = {params: { id: 1 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productServices, 'getProductById')
      .resolves(mockProducts.productById);
    
    await productController.getProductById(req, res)

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockProducts.productById);
  })

});