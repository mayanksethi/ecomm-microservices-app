const userService = require('./user.service');

const registerUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getOneUser = async (req, res) => {
    try {
        const user = await userService.getOneUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status.send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const login = async (req, res) => {
    try {
        const user = await userService.login(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const logout = async (req, res) => {
    try {
        await userService.logout(req.body.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    registerUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    login,
    logout,
};
