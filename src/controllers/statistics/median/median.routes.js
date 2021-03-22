const express = require('express');
const router = express.Router();

// Controllers
const Median = require("./median.controller");

const { simpleMedian } = new Median;

// POST MEDIAN
router.post('/median', (req, res) => {
    return simpleMedian(req, res);
});

module.exports = router;