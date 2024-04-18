const User = require('../user/user.model.js');
const productService = require('./product.service.js');

const createProduct = async (req, res) => {
    try {
        const user  = await User.findById(req.userId);
        console.log(user.role);
        if (user.role !== 'admin') {
            throw new Error('Only admins can create items');
        }
        const item = await productService.createItem({ ...req.body, createdBy: req.userId });
        res.status(201).json(item);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getOneProduct = async (req, res) => {
    try {
        const product = await productService.getOneProduct(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateProduct = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            throw new Error('Only admins can update items');
        }
        const product = await productService.updateProduct(req.params.id, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteProduct = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            throw new Error('Only admins can delete items');
        }
        await productService.deleteProduct(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const rateProduct = async (req, res) => {
    try {
        const product = await productService.rateProduct(req.params.id, req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    rateProduct,
};
