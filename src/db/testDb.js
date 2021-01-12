const pool = require('./config.js');

pool.on('connect', () => {
  console.log('connected to the db');
});

/**
 * Basic Pool Query Structure
 * @param {string} query
 * @return {object}
 */
const poolQuery = (query) => {
  return pool.query(query)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create Tokens Table
 */
const createtokensTable = () => {
  const tokenCreateQuery = `CREATE TABLE IF NOT EXISTS tokens
  (id SERIAL PRIMARY KEY, 
  name VARCHAR(100) NOT NULL, 
  ip_address VARCHAR(50), 
  created_on TIMESTAMPTZ DEFAULT Now())`;

  poolQuery(tokenCreateQuery);
};

/**
 * Drop Tokens Table
 */
const dropTokensTable = () => {
  const tokensDropQuery = 'DROP TABLE IF EXISTS tokens';
  poolQuery(tokensDropQuery);
};

/**
 * Create All Tables
 */
const createAllTables = () => createtokensTable();


/**
 * Drop All Tables
 */
const dropAllTables = () => dropTokensTable();

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});


module.exports = {
  createAllTables,
  dropAllTables,
};

require('make-runnable');