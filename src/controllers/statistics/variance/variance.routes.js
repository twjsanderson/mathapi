const express = require('express');
const router = express.Router();

// Controllers
const Variance = require("./variance.controller");

const { varianceCalc } = new Variance;

// POST VARIANCE
router.post('/variance', (req, res) => {
    return varianceCalc(req, res);
});

module.exports = router;