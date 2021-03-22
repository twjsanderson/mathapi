const express = require('express');
const router = express.Router();

// Controllers
const Division = require("./division.controller");

const { simpleDivision, multipleDivision } = new Division;

// POST SIMPLE DIVISION
router.post('/divide/simple', (req, res) => {
    return simpleDivision(req, res);
});

// POST MULTIPLE DIVISION
router.post('/divide/multiple', (req, res) => {
    return multipleDivision(req, res);
});

module.exports = router;