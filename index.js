const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();

const config = require("./src/config/config.js");
const routes = require("./src/api/routes.js");
const port = config.port;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes)

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});