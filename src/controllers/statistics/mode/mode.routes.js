const express = require('express');
const router = express.Router();

// Controllers
const Mode = require("./mode.controller");

const { simpleMode } = new Mode;

// POST MODE
router.post('/mode', (req, res) => {
    return simpleMode(req, res);
});

module.exports = router;