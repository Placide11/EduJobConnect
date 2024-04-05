const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../db');

const secretKey = 'your-secret-key';

router.post('/register', (req, res) =>  {
    // Handle user registration
    const { email, username, password } = req.body;

    // Check if the user already exists
    const checkUserQuery = 'SELECT * FROM users WHERE email = ? OR username = ?';
    db.query(checkUserQuery, [email, username], (error, results) => {
        if (error) {
            console.error('Error checking user:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
    })

    const token = jwt.sign({ email, username }, secretKey, { expiresIn: '1h' });
    res.json
})

module.exports = router