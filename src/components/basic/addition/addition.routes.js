const express = require('express');
const router = express.Router();

// Controllers
const additionController = require("./addition.controller");

// GET SIMPLE ADDITION
router.get('/add/simple', (req, res) => {
    return additionController.simpleAddition(req, res);
});

// GET MULTIPLE ADDITION
router.get('/add/multiple', (req, res) => {
    return additionController.multipleAddition(req, res);
});

module.exports = router;