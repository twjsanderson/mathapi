const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const SquareRoot = require("./sqrt.controller");

const { simpleSquareRoot } = new SquareRoot;

// GET SIMPLE SQUARE ROOT
router.get('/powers/sqrt', (req, res, next) => asyncCatch(simpleSquareRoot(req, res, next)));


module.exports = router;