// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key'; // Keep your secret key in an environment variable

const authMiddleware = (req, res, next) => {
    // Get token from headers
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    // Check if token exists
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach user info to request
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
