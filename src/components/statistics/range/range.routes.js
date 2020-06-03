const express = require('express');
const router = express.Router();

// Controllers
const rangeController = require("./range.controller");

// POST RANGE
router.post('/range', (req, res) => {
    return rangeController.range(req, res);
});

module.exports = router;