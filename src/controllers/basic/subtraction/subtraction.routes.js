const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const Subtraction = require('./subtraction.controller');

const { simpleSubtraction, multipleSubtraction } = new Subtraction;

// GET SIMPLE SUBTRACTION
router.get('/subtract/simple', (req, res) => asyncCatch(simpleSubtraction(req, res)));

// GET MULTIPLE SUBTRACTION
router.get('/subtract/multiple', (req, res) => asyncCatch(multipleSubtraction(req, res)));

module.exports = router;