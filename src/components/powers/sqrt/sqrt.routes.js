const express = require('express');
const router = express.Router();

// Controllers
const SquareRoot = require("./sqrt.controller");

const { simpleSquareRoot } = new SquareRoot;

// GET SIMPLE SQUARE ROOT
router.get('/powers/sqrt', (req, res) => {
    return simpleSquareRoot(req, res);
});


module.exports = router;