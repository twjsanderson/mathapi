const express = require('express');
const router = express.Router();

// Controllers
const exponentController = require("./exponent.controller");

// GET SIMPLE EXPONENT
router.get('/powers/exponent', (req, res) => {
    return exponentController.exponent(req, res);
});


module.exports = router;