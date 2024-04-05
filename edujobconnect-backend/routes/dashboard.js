const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../db');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401); // unauthorized
    
    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) return res.sendStatus(403); // forbidden
        req.user = user;
        next(); // authorized
    }) 
}

router.get('/jobs', authenticateToken, (req, res) => {
    const query = 'SELECT * FROM jobs';
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching jobs:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

router.get('/courses' , authenticateToken, (req, res) => {
    const query = 'SELECT * FROM courses';
    db.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching courses:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
})

module.exports = router