const axios = require('axios');
require('dotenv').config(); 

const createItem = async (data) => {
    try {
        console.log('data', data);
        const response = await axios.post(`${process.env.PRODUCT_URL}`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create item');
    }
};

const getAllProducts = async () => {
    try {
        const response = await axios.get(`${process.env.PRODUCT_URL}/product`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to get products');
    }
}

const getOneProduct = async (id) => {
    try {
        const response = await axios.get(`${process.env.PRODUCT_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to get product');
    }
}

const updateProduct = async (id, data) => {
    try {
        const response = await axios.put(`${process.env.PRODUCT_URL}/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update product');
    }
}

const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${process.env.PRODUCT_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete product');
    }
}

const rateProduct = async (id, data) => {
    try {
        const response = await axios.post(`${process.env.PRODUCT_URL}/rate/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Failed to rate product');
    }
}

module.exports = {
    createItem,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    rateProduct,
};
