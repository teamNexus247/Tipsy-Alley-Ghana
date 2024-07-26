const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

// Routes
router.route('/').get(getProducts).post(upload.single('image'), createProduct);
router.route('/:id').get(getProductById).put(upload.single('image'), updateProduct).delete(deleteProduct);

module.exports = router;
