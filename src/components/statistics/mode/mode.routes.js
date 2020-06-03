const express = require('express');
const router = express.Router();

// Controllers
const modeController = require("./mode.controller");

// POST MODE
router.post('/mode', (req, res) => {
    return modeController.mode(req, res);
});

module.exports = router;