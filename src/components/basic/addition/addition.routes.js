const express = require('express');
const router = express.Router();

// Controllers
const Addition = require("./addition.controller");

const { simpleAddition, multipleAddition } = new Addition;

// GET SIMPLE ADDITION
router.get('/add/simple', (req, res) => {
    return simpleAddition(req, res);
});

// GET MULTIPLE ADDITION
router.get('/add/multiple', (req, res) => {
    return multipleAddition(req, res);
});

module.exports = router;