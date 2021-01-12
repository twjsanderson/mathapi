require('dotenv').config();
const { Pool } = require('pg');

const databaseConfig = { 
    user: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASS,
    host: process.env.TEST_DB_HOST,
    port: process.env.TEST_DB_PORT,
    database: process.env.TEST_DB_NAME
};
const pool = new Pool(databaseConfig);

module.exports = pool;