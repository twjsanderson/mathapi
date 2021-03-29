const express = require('express');
const router = express.Router();
const asyncCatch = require('../../util/aysncCatch');

// Controllers
const Quadradtic = require('./quadratic.controller');

const { quadraticFunction } = new Quadradtic;

// GET QUADRATIC FORMULA
router.get('/quadratic', (req, res, next) => asyncCatch(quadraticFunction(req, res, next)));

module.exports = router;