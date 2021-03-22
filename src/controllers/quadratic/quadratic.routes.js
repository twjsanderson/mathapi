const express = require('express');
const router = express.Router();

// Controllers
const Quadradtic = require("./quadratic.controller");

const { quadraticFunction } = new Quadradtic;

// GET QUADRATIC FORMULA
router.get('/quadratic', (req, res) => {
    return quadraticFunction(req, res);
});

module.exports = router;