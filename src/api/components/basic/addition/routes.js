const app = require('express')();

const simpleAddition = require("./controller");
const multipleAddition = require("./controller");

// GET SIMPLE ADDITION
app.get('/add/simple', (req, res) => {
    return simpleAddition(req, res);
});

// GET MULTIPLE ADDITION
app.get('/add/multiple', (req, res) => {
    return multipleAddition(req, res);
});



module.exports = app;