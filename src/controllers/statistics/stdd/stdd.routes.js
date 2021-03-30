const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const StandardDeviation = require("./stdd.controller");

const { stdd } = new StandardDeviation;

// GET STANDARD DEVIATION
router.get('/standardDeviation', (req, res, next) => asyncCatch(stdd(req, res, next)));

module.exports = router;