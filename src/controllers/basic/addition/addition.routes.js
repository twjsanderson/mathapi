const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const Addition = require('./addition.controller');

const { simpleAddition, multipleAddition } = new Addition;

// GET SIMPLE ADDITION
router.get('/add/simple', (req, res, next) => asyncCatch(simpleAddition(req, res, next)));

// GET MULTIPLE ADDITION
router.get('/add/multiple', (req, res, next) => asyncCatch(multipleAddition(req, res, next)));

module.exports = router;