const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const Range = require("./range.controller");

const { simpleRange } = new Range;

// GET RANGE
router.get('/range', (req, res, next) => asyncCatch(simpleRange(req, res, next)));

module.exports = router;