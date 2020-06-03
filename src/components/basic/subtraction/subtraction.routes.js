const express = require('express');
const router = express.Router();

// Controllers
const subtractionController = require("./subtraction.controller");

// POST SIMPLE SUBTRACTION
router.post('/subtract/simple', (req, res) => {
    return subtractionController.simpleSubtraction(req, res);
});

// POST MULTIPLE SUBTRACTION
router.post('/subtract/multiple', (req, res) => {
    return subtractionController.multipleSubtraction(req, res);
});

module.exports = router;