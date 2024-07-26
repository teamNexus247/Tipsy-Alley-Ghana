const Product = require('../models/productModel');
const path = require('path');

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const image = req.file ? req.file.path : ''; // Handle file upload

    const product = await Product.create({ name, price, category, image });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all products or products by category
const getProducts = async (req, res) => {
  try {
    const category = req.query.category;
    const query = category ? { category } : {};
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const image = req.file ? req.file.path : undefined; // Handle file upload

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, category, image },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
