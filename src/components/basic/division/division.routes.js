const express = require('express');
const router = express.Router();

// Controllers
const divisionController = require("./division.controller");

// GET SIMPLE DIVISION
router.get('/divide/simple', (req, res) => {
    return divisionController.simpleDivision(req, res);
});

// GET MULTIPLE DIVISION
router.get('/divide/multiple', (req, res) => {
    return divisionController.multipleDivision(req, res);
});

module.exports = router;