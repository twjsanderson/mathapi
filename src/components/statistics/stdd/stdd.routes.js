const express = require('express');
const router = express.Router();

// Controllers
const stddController = require("./stdd.controller");

// POST STANDARD DEVIATION
router.post('/standardDeviation', (req, res) => {
    return stddController.stdd(req, res);
});

module.exports = router;