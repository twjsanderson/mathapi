const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();

const AdditionOperations = require("./src/api/util/formula/addition/index");

const Addition = new AdditionOperations;


// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log(Addition.simpleAddition(2, 32))

app.get('/', (req, res) => res.send('App is working'))

// app.use('/api', routes)

app.listen(5000, () => {
    console.log('app listening on port 5000')
});