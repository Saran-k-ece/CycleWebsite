const Product = require('../model/productModel');

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new product
const createProduct = async (req, res) => {
    const { title, price, description, category, image, rating } = req.body;

    const newProduct = new Product({
        title,
        price,
        description,
        category,
        image,
        rating
    });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getProducts, createProduct };
