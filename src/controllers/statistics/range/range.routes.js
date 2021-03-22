const express = require('express');
const router = express.Router();

// Controllers
const Range = require("./range.controller");

const { simpleRange } = new Range;

// POST RANGE
router.post('/range', (req, res) => {
    return simpleRange(req, res);
});

module.exports = router;