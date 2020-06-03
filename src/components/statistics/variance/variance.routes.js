const express = require('express');
const router = express.Router();

// Controllers
const varianceController = require("./variance.controller");

// POST VARIANCE
router.post('/variance', (req, res) => {
    return varianceController.variance(req, res);
});

module.exports = router;