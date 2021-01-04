const express = require('express');
const router = express.Router();

// Controllers 
const AuthenticationController = require('./authentication.controller');

// POST ACCESS/REFRESH TOKENS
router.post('/auth/tokens', (req, res) => {
    if (!req.query.user) return res.sendStatus(403);
    const authentication = new AuthenticationController(req, res);
    return authentication.requestTokens();
});

// // POST REFRESH TOKENS
// router.post('/auth/refresh', (req, res) => {

// });

module.exports = router;