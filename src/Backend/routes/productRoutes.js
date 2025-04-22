const express = require('express');
const { getProducts, createProduct } = require('../controller/productController');
const router = express.Router();

// GET /api/products
router.get('/', getProducts);

// POST /api/products
router.post('/', createProduct);

module.exports = router;
