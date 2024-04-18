const express = require('express');
const orderController = require('./order.controller.js');
const { authenticateUser } = require('../user/authenticate.user.js');

const router = express.Router();

router
    .route('/')
    .post(authenticateUser, orderController.createOrder)
    .get(authenticateUser, orderController.getAllOrders);

router
    .route('/:id')
    .post(authenticateUser, orderController.cancelOrder);

module.exports = router;
