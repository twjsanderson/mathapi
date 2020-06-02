const port = require("../config/config.js");

const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();

const MathOperations = require("./util/math");

const Math = new MathOperations;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// console.log(Math.quadraticFormula(1, 5, 1))


// app.use('/api', routes)

app.listen(port, () => {
    console.log('app listening on port 5000')
});