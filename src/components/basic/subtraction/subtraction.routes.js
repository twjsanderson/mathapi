const express = require('express');
const router = express.Router();

// Controllers
const subtractionController = require("./subtraction.controller");

// GET SIMPLE SUBTRACTION
router.get('/subtract/simple', (req, res) => {
    return subtractionController.simpleSubtraction(req, res);
});

// GET MULTIPLE SUBTRACTION
router.get('/subtract/multiple', (req, res) => {
    return subtractionController.multipleSubtraction(req, res);
});

module.exports = router;