require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

// config 
const { port } = require('./src/config/index.js');

// routes
const routes = require('./src/routes.js');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});