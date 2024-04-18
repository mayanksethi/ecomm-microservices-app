const axios = require('axios');
require('dotenv').config(); 

const createOrder = async (data) => {
    try {
        const response = await axios.post(process.env.ORDER_URL, data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create order');
    }
}

const getAllOrders = async () => {
    try {
        const response = await axios.get(`${process.env.ORDER_URL}/order`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to get orders');
    }
}

const cancelOrder = async (id) => {
    try {
        const response = await axios.delete(`${process.env.ORDER_URL}/order/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to cancel order');
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    cancelOrder
};