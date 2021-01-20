const express = require('express');
const router = express.Router();

// Controllers
const Addition = require("./addition.controller");

const { simpleAddition, multipleAddition } = new Addition;

// POST SIMPLE ADDITION
router.post('/add/simple', (req, res) => {
    return simpleAddition(req, res);
});

// POST MULTIPLE ADDITION
router.post('/add/multiple', (req, res) => {
    return multipleAddition(req, res);
});

module.exports = router;