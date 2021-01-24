const Database = require('../../db/database.js');

class AuthenticationModel extends Database {
    
    createTable = async () => {
        const createTable = `CREATE TABLE IF NOT EXISTS tokens
            (name VARCHAR(100) NOT NULL PRIMARY KEY,
            password VARCHAR(225) NOT NULL, 
            access_token VARCHAR(225) NOT NULL,
            refresh_token VARCHAR(225) NOT NULL,
            created_on TIMESTAMPTZ DEFAULT Now(),
            UNIQUE (name, access_token, refresh_token))`;
        return await this.poolQuery(createTable);
    };

    dropTable = async () => {
        const dropTable = `DROP TABLE IF EXISTS tokens`;
        return await this.poolQuery(dropTable);
    };

    getTable = async () => {
        const getRow = `SELECT * FROM tokens`;
        return await this.poolQuery(getRow);
    };

    createRow = async (user, pass, access_token, refresh_token) => {
        const createRow = `INSERT INTO tokens(name, password, access_token, refresh_token) 
            VALUES ('${user}', '${pass}', '${access_token}', '${refresh_token}')`;
        return await this.poolQuery(createRow);
    };  

    getRow = async (refresh_token) => {
        const getRow = `SELECT * FROM tokens
            WHERE refresh_token = '${refresh_token}'`;
        return await this.poolQuery(getRow);
    }; 
}

module.exports = AuthenticationModel;