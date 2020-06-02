const express = require('express');
const router = express.Router();

// Controllers
const quadraticController = require("./quadratic.controller");

// GET QUADRATIC FORMULA
router.get('/quadratic', (req, res) => {
    return quadraticController.quadraticFunction(req, res);
});

module.exports = router;