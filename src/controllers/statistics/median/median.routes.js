const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const Median = require('./median.controller');

const { simpleMedian } = new Median;

// GET MEDIAN
router.get('/median', (req, res, next) => asyncCatch(simpleMedian(req, res, next)));

module.exports = router;