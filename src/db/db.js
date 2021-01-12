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
const createTokensTable = () => {
  const tokenCreateQuery = `CREATE TABLE IF NOT EXISTS tokens
  (id SERIAL PRIMARY KEY, 
  name VARCHAR(100) NOT NULL, 
  ip_address VARCHAR(50), 
  access_token VARCHAR(225) NOT NULL,
  refresh_token VARCHAR(225) NOT NULL,
  created_on TIMESTAMPTZ DEFAULT Now())`;

  poolQuery(tokenCreateQuery);
};

const addToTokensTable = async (params) => {
    const addTokenQuery = `INSERT INTO tokens (name, ip_address, access_token, refresh_token) 
    VALUES (${params.name}, ${params.ip_address}, ${params.access_token}, ${params.refresh_token})`;

    poolQuery(addTokenQuery);
    return poolQuery('SELECT * FROM tokens');
};

const deleteFromTokensTable = (params) => {
    const deleteTokenQuery = `DELETE FROM tokens 
    WHERE name = ${params.name} 
    AND ip_address = ${params.ip_address}`;

    poolQuery(deleteTokenQuery);
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
const createAllTables = () => createTokensTable();


/**
 * Drop All Tables
 */
const dropAllTables = () => dropTokensTable();

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});


module.exports = {
    addToTokensTable,
    createAllTables,
    dropAllTables,
};

require('make-runnable');