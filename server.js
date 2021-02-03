require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const { handleError } = require('./src/util/errorHandler');

// config 
const { port } = require('./src/config/index.js');

// routes
const routes = require('./src/routes.js');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// give cors/headers access to clients, prevent cors errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    // can browser make a certain request at all
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE')
        return res.status(200).json({});
    }

})

app.use('/api', routes);

app.use((req, res, next) => {
    const error = new Error('error test');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.mesage
        }
    })
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});