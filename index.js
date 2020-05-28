const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();

const AdditionOperations = require("./src/api/util/operations/addition/index");
const SubtractionOperations = require("./src/api/util/operations/subtraction/index");
const MultiplicationOperations = require("./src/api/util/operations/multiplication/index");
const DivisionOperations = require("./src/api/util/operations/division/index");
const PowerOperations = require("./src/api/util/operations/power/index");

const addition = new AdditionOperations;
const subtraction = new SubtractionOperations;
const multiplication = new MultiplicationOperations;
const division = new DivisionOperations;
const power = new PowerOperations;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log(power.powerOfPower(6,3,4))


// app.use('/api', routes)

app.listen(5000, () => {
    console.log('app listening on port 5000')
});