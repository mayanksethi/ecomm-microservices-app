const orderService = require('./order.service.js');

const createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const cancelOrder = async (req, res) => {
    try {
        const order = await orderService.cancelOrder(req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    cancelOrder
};  