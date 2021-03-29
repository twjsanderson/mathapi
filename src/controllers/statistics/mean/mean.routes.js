const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const Mean = require("./mean.controller");

const { simpleMean } = new Mean;

// GET MEAN
router.get('/mean', (req, res, next) => asyncCatch(simpleMean(req, res, next)));

module.exports = router;