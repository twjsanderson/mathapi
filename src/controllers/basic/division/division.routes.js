const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const Division = require('./division.controller');

const { simpleDivision, multipleDivision } = new Division;

// GET SIMPLE DIVISION
router.get('/divide/simple', (req, res, next) => asyncCatch(simpleDivision(req, res, next)));

// GET MULTIPLE DIVISION
router.get('/divide/multiple', (req, res, next) => asyncCatch(multipleDivision(req, res, next)));

module.exports = router;