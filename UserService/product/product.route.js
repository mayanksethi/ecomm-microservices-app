const express = require('express');
const productController = require('./product.controller.js');
const { authenticateUser, authenticateAdmin } = require('../user/authenticate.user.js');

const router = express.Router();

router
    .route('/')
    .post(authenticateAdmin, productController.createProduct)
    .get(authenticateUser, productController.getAllProducts);

router
    .route('/:id')
    .get(authenticateUser, productController.getOneProduct)
    .put(authenticateAdmin, productController.updateProduct)
    .delete(authenticateAdmin, productController.deleteProduct);

router
    .route('/rate/:id')
    .post(authenticateUser, productController.rateProduct);

module.exports = router;
