const pool = require('./config.js');

class DatabaseController {
    constructor() {

    }

    poolQuery = async (query) => {
        try {
            return await pool.query(query);
        } catch (error) {
            return error;
        }
    };

    createTable = () => {
        const createTable = `CREATE TABLE IF NOT EXISTS tokens
            (id SERIAL NOT NULL PRIMARY KEY, 
            name VARCHAR(100) NOT NULL, 
            access_token VARCHAR(225) NOT NULL,
            refresh_token VARCHAR(225) NOT NULL,
            created_on TIMESTAMPTZ DEFAULT Now())`;
        return this.poolQuery(createTable);
    };

    dropTable = () => {
        const dropTable = `DROP TABLE IF EXISTS tokens`;
        return this.poolQuery(dropTable);
    };

    addRow = async (user, access_token, refresh_token) => {
        const addRow = `INSERT INTO tokens(name, access_token, refresh_token) 
            VALUES ('${user}', '${access_token}', '${refresh_token}') RETURNING *`;
            // console.log(await this.poolQuery(addRow))
        return await this.poolQuery(addRow);
    };
};

module.exports = DatabaseController;