const pool = require('./config.js');

class Database {
    constructor() {
        this.pool = pool;
    }

    poolQuery = async (query) => {
        try {
            return await this.pool.query(query);
        } catch (error) {
            return error;
        }
    };
};

module.exports = Database;