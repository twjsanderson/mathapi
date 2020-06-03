const express = require('express');
const router = express.Router();

// Controllers
const meanController = require("./mean.controller");

// POST MEAN
router.post('/mean', (req, res) => {
    return meanController.mean(req, res);
});

module.exports = router;