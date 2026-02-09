
const productService = require('../Services/productService');

exports.getAllProducts = (req, res) => {
  const message = productService.getAllProducts();
  res.send(message);
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  const message = productService.getProductById(id);
  res.send(message);
};

exports.addProduct = (req, res) => {
  const message = productService.addProduct();
  res.send(message);
};
