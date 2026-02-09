const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');

router.get('/products', productController.getAllProducts);
router.post('/products', productController.addProduct);
router.get('/products/:id', productController.getProductById);

module.exports = router;
