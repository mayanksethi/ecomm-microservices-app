const jwt = require('jsonwebtoken');
const User = require('./user.model');

const verifyUser =  async (userId) => {
    const userDetails = await User.findById(userId);
    if(!userDetails){
        throw new Error('user not found');
    }
    return userDetails;
} 

const authenticateUser = async (req, res, next) => {
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'secret');
        await verifyUser(decoded.id);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Not authorized' });
    }
};

const authenticateAdmin = async (req, res, next) => {
    try {
        console.log(req.headers);
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'secret');
        const userDetails = await verifyUser(decoded.id);
        if(userDetails.role !== 'Admin'){
            throw new Error('Forbidden! only admins are allowed');
        }
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Not authorized' });
    }
};

module.exports = {
    authenticateUser,
    authenticateAdmin
};