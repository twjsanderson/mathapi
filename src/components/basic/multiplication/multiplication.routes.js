const express = require('express');
const router = express.Router();

// Controllers
const multiplcationController = require("./multiplication.controller");

// GET SIMPLE MULTIPLICATION
router.get('/multiply/simple', (req, res) => {
    return multiplcationController.simpleMultiplication(req, res);
});

// GET MULTIPLE MULTIPLICATION
router.get('/multiply/multiple', (req, res) => {
    return multiplcationController.multipleMultiplication(req, res);
});

module.exports = router;