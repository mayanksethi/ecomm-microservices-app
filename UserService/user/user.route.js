const router = require('express').Router();
const userController = require('./user.controller.js');
const { authenticateUser, authenticateAdmin} = require('./authenticate.user.js');

router
    .route('/')
    .post(userController.registerUser)
    .get(authenticateAdmin, userController.getAllUsers);

router
    .route('/:id')
    .get(authenticateUser, userController.getOneUser)
    .put(authenticateUser, userController.updateUser)
    .delete(authenticateAdmin, userController.deleteUser);

router
    .route('/login')
    .post(userController.login);

router
    .route('/logout')
    .post(authenticateUser, userController.logout);

module.exports = router;
