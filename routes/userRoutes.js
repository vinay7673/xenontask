const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Your User model

const router = express.Router();

// JWT secret
const JWT_SECRET = 'your_jwt_secret_key';

// Register
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body; // Now using email instead of username
        console.log('Registering user:', email); // Debugging line

        // Check if user exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        user = new User({ email, password: hashedPassword });
        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error('Server error:', err); // Log the error for debugging
        res.status(500).json({ msg: 'Server error' });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body; // Now using email instead of username

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        // Create JWT token
        const payload = { userId: user._id };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Logout (token invalidation could be handled client-side)
router.post('/logout', (req, res) => {
    res.json({ msg: 'Logged out' });
});

module.exports = router;
