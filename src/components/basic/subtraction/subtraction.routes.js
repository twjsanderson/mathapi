const express = require('express');
const router = express.Router();

// Controllers
const Subtraction = require("./subtraction.controller");

const { simpleSubtraction, multipleSubtraction } = new Subtraction;

// POST SIMPLE SUBTRACTION
router.post('/subtract/simple', (req, res) => {
    return simpleSubtraction(req, res);
});

// POST MULTIPLE SUBTRACTION
router.post('/subtract/multiple', (req, res) => {
    return multipleSubtraction(req, res);
});

module.exports = router;