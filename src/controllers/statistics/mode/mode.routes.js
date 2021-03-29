const express = require('express');
const router = express.Router();
const asyncCatch = require('../../../util/aysncCatch');

// Controllers
const Mode = require('./mode.controller');

const { simpleMode } = new Mode;

// GET MODE
router.get('/mode', (req, res, next) => asyncCatch(simpleMode(req, res, next)));

module.exports = router;