const express = require('express');
const router = express.Router();

// Controllers
const StandardDeviation = require("./stdd.controller");

const { stddCalc } = new StandardDeviation;

// POST STANDARD DEVIATION
router.post('/standardDeviation', (req, res) => {
    return stddCalc(req, res);
});

module.exports = router;