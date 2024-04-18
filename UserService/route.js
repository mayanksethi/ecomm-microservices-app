const express = require('express');
const userRoute = require('./user/user.route.js');
const productRoute = require('./product/product.route.js');
const orderRoute = require('./order/order.route.js');

const router = express.Router();

const allRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/orders',
    route: orderRoute,
  }
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;