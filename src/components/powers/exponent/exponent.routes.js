const express = require('express');
const router = express.Router();

// Controllers
const Exponent = require("./exponent.controller");

const { simpleExponent } = new Exponent;

// GET SIMPLE EXPONENT
router.get('/powers/exponent', (req, res) => {
    return simpleExponent(req, res);
});

module.exports = router;