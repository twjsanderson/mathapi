const express = require('express');
const router = express.Router();

// Controllers
const sqrtController = require("./sqrt.controller");

// GET SIMPLE SQUARE ROOT
router.get('/powers/sqrt', (req, res) => {
    return sqrtController.simpleSquareRoot(req, res);
});


module.exports = router;