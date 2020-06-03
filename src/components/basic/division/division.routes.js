const express = require('express');
const router = express.Router();

// Controllers
const divisionController = require("./division.controller");

// POST SIMPLE DIVISION
router.post('/divide/simple', (req, res) => {
    return divisionController.simpleDivision(req, res);
});

// POST MULTIPLE DIVISION
router.post('/divide/multiple', (req, res) => {
    return divisionController.multipleDivision(req, res);
});

module.exports = router;