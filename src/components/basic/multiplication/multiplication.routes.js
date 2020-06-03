const express = require('express');
const router = express.Router();

// Controllers
const multiplcationController = require("./multiplication.controller");

// POST SIMPLE MULTIPLICATION
router.post('/multiply/simple', (req, res) => {
    return multiplcationController.simpleMultiplication(req, res);
});

// POST MULTIPLE MULTIPLICATION
router.post('/multiply/multiple', (req, res) => {
    return multiplcationController.multipleMultiplication(req, res);
});

module.exports = router;