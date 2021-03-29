const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const Exponent = require("./exponent.controller");

const { simpleExponent } = new Exponent;

// GET SIMPLE EXPONENT
router.get('/powers/exponent', (req, res, next) => asyncCatch(simpleExponent(req, res, next)));

module.exports = router;