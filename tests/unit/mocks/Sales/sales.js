const allSales = [
  { sale_id: 1, product_id: 1, quantity: 5 },
  { sale_id: 1, product_id: 2, quantity: 10 },
  { sale_id: 2, product_id: 3, quantity: 15 },
]

const productErrorId = [
  { sale_id: 1, product_id: 9999, quantity: 5 },
  { sale_id: 1, product_id: 8888, quantity: 10 },
  { sale_id: 2, product_id: 7777, quantity: 15 },
]

const sale = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  },
  {
    "productId": 3,
    "quantity": 5
  }
  
]

const idNotExist = [
  {
    "quantity": 1
  },
  {
    "quantity": 5
  }
]

const quantityNotExist = [
  {
    "productId": 1,
  },
  {
    "productId": 2,
  }
]

const quantityValueError = [
  {
    "productId": 1,
    "quantity": 0
  },
  {
    "productId": 2,
    "quantity": 0
  }
]

const saleById = [
  {
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 2,
    "quantity": 10
  }
]

const returnAllSales = [
  {
    "saleId": 1,
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-10-13T21:45:29.000Z",
    "productId": 3,
    "quantity": 15
  }
]

module.exports = {
  allSales,
  productErrorId,
  sale,
  idNotExist,
  quantityNotExist,
  quantityValueError,
  saleById,
  returnAllSales,
}
