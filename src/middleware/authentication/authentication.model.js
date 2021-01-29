const Database = require('../../db/database.js');

class AuthenticationModel extends Database {
    
    createTable = async () => {
        const createTable = `CREATE TABLE IF NOT EXISTS tokens
            (name VARCHAR(100) NOT NULL PRIMARY KEY,
            password VARCHAR(225) NOT NULL, 
            access_token VARCHAR(225) NOT NULL,
            refresh_token VARCHAR(225) NOT NULL,
            updated_on TIMESTAMPTZ DEFAULT Now(),
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

    dropRow = async (user, pass, ) => {

    };

    getRowFromToken = async (refresh_token) => {
        const getRow = `SELECT * FROM tokens
            WHERE refresh_token = '${refresh_token}'`;
        return await this.poolQuery(getRow);
    }; 

    getRowFromUserPass = async (user, pass) => {
        const getRow = `SELECT * FROM tokens
            WHERE name = '${user}' AND password='${pass}'`;
        return await this.poolQuery(getRow);
    }; 

    getRowFromUser = async (user) => {
        const getRow = `SELECT * FROM tokens
            WHERE name = '${user}'`;
        return await this.poolQuery(getRow);
    }; 

    updateRowWithToken = async (user, access_token) => {
        const updateRow = `UPDATE tokens
            SET (access_token = '${access_token}',
                updated_on = TIMESTAMPTZ DEFAULT Now())
            WHERE name = '${user}'`;
        return await this.poolQuery(updateRow);
    };

    updateRowWithUserPass = async (user, pass, newUser, newPass) => {
        const updateRow = `UPDATE tokens
            SET (name = '${newUser}',
                password = '${newPass}',
                updated_on = TIMESTAMPTZ DEFAULT Now())
            WHERE name = '${user}' AND password '${pass}'`;
        return await this.poolQuery(updateRow);
    };

    deleteRowFromUserPass = async (user, pass) => {
        const deleteRow = `DELETE from tokens
            WHERE name = '${user}' AND password '${pass}'`;
        return await this.poolQuery(deleteRow);
    }
}

module.exports = AuthenticationModel;