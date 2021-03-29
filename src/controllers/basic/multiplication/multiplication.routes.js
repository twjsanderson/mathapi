const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const Multiplication = require("./multiplication.controller");

const { simpleMultiplication, multipleMultiplication } = new Multiplication;

// GET SIMPLE MULTIPLICATION
router.get('/multiply/simple', (req, res) => asyncCatch(simpleMultiplication(req, res)));

// GET MULTIPLE MULTIPLICATION
router.get('/multiply/multiple', (req, res) => asyncCatch(multipleMultiplication(req, res)));

module.exports = router;