const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const Variance = require('./variance.controller');

const { simpleVariance } = new Variance;

// GET VARIANCE
router.get('/variance', (req, res, next) => asyncCatch(simpleVariance(req, res, next)));

module.exports = router;