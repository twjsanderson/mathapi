const express = require('express');
const router = express.Router();

// Controllers
const additionController = require("./addition.controller");

// POST SIMPLE ADDITION
router.post('/add/simple', (req, res) => {
    return additionController.simpleAddition(req, res);
});

// POST MULTIPLE ADDITION
router.post('/add/multiple', (req, res) => {
    return additionController.multipleAddition(req, res);
});

module.exports = router;