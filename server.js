require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const Authentication = require('./src/middleware/authentication');

const authentication = new Authentication({ user: 'Tom' });

// let accessTok = authentication.generateAccessToken();
// let refreshTok = authentication.generateRefreshToken();

// console.log(authentication.verifyToken(accessTok, 'accessToken'));
// console.log(authentication.verifyToken(refreshTok, 'refreshToken'));



// config 
const port = require('./src/config/config.js').port;

// routes
const routes = require('./src/routes.js');

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});