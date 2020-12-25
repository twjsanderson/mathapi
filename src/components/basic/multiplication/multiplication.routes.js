const express = require('express');
const router = express.Router();

// Controllers
const Multiplication = require("./multiplication.controller");

const { simpleMultiplication, multipleMultiplication } = new Multiplication;

// POST SIMPLE MULTIPLICATION
router.post('/multiply/simple', (req, res) => {
    return simpleMultiplication(req, res);
});

// POST MULTIPLE MULTIPLICATION
router.post('/multiply/multiple', (req, res) => {
    return multipleMultiplication(req, res);
});

module.exports = router;