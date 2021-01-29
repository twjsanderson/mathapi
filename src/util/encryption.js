const bcrypt = require('bcrypt');

class Encryption {
    constructor() {
        this.saltRounds = 10;
    };
    
    hash = async (password) => {
        const salt = await bcrypt.genSalt(this.saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    };

    compareHash = async (password, hash) => {
        const match = await bcrypt.compare(password, hash);
        return match;
    };
};

module.exports = Encryption;


// // example use
// const useHash = async () => {
//     const encryption = new Encryption;
//     const hash = await encryption.encrypt('password');
//     // do something with hash, like add to DB
//     console.log(hash)
// };   

// useHash();