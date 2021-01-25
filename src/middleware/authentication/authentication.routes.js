const express = require('express');
const router = express.Router();

// Controllers 
const AuthenticationController = require('./authentication.controller');

// POST - REQUEST ACCESS & REFRESH TOKENS
router.post('/auth/signIn', (req, res) => {
//    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (!req.query.user) return res.sendStatus(400);
    const authentication = new AuthenticationController(req, res);
    return authentication.signIn();
});

// POST - REFRESH AN EXISTING ACCESS TOKEN
router.post('/auth/refresh', (req, res) => {
    if (!req.body.refreshToken) return res.sendStatus(400);
    const authentication = new AuthenticationController(req, res);
    return authentication.refreshToken();
});

// DELETE - 
router.delete('/auth/signOut', (req, res) => {
    const authentication = new AuthenticationController(req, res);
    
});

module.exports = router;