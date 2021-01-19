const pool = require('./config.js');

const createTable = `CREATE TABLE IF NOT EXISTS tokens
(id SERIAL NOT NULL PRIMARY KEY, 
name VARCHAR(100) NOT NULL, 
access_token VARCHAR(225) NOT NULL,
refresh_token VARCHAR(225) NOT NULL,
created_on TIMESTAMPTZ DEFAULT Now())`;

const dropTable = `DROP TABLE IF EXISTS tokens`;

const addRow = `INSERT INTO tokens(name, access_token, refresh_token) VALUES ('tom', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVG9tIiwiaWF0IjoxNjExMDI0Njk2LCJleHAiOjE2MTExMjQ2OTZ9.WsPf5nERBoFHSNXzQtmOkGUEeGTY8zDCO3wGkQww3t8', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVG9tIiwiaWF0IjoxNjExMDI0Njk2fQ.dIz-q4A23XdvvlPOgsoYo7DhMBz0lLe9tW_JvN0FgeQ') RETURNING *`;

const testDB = async() => {
    try {
        console.log('before connection');
        const result = await pool.query('SELECT $1::text as status', ['connected']);
        console.log('connected')
        await pool.query(dropTable);
        await pool.query(createTable);
        const addNewRow = await pool.query(addRow);
        return addNewRow.rows; 
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return null;
    }
}

module.exports = { testDB };