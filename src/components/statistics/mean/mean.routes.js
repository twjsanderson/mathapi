const express = require('express');
const router = express.Router();

// Controllers
const Mean = require("./mean.controller");

const { simpleMean } = new Mean;

// POST MEAN
router.post('/mean', (req, res) => {
    return simpleMean(req, res);
});

module.exports = router;