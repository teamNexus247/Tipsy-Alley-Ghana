const express = require('express');
const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  uploadProductImage,
} = require('../controllers/productController');

const router = express.Router();

router.post('/add', uploadProductImage, addProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', uploadProductImage, updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
