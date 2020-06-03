const express = require('express');
const router = express.Router();

// Controllers
const medianController = require("./median.controller");

// POST MEDIAN
router.post('/median', (req, res) => {
    return medianController.median(req, res);
});

module.exports = router;