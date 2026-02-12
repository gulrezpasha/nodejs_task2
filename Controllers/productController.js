
const productService = require('../Services/productService');

const path = require('path');
exports.getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname, '../view/product.html'));
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  const message = productService.getProductById(id);
  res.send(message);
};

exports.addProduct = (req, res) => {
  const { productName } = req.body;
  console.log('Product received:', productName);
  res.json({ addedProduct: productName });
};
