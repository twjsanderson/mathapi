require('dotenv').config();

const jwt = require('jsonwebtoken');

class Authentication {
    constructor(user) {
        this.user = user;
        this.time = '20s'
        this.secretAccessToken = process.env.ACCESS_TOKEN_SECRET;
        this.secretRefreshToken = process.env.REFRESH_TOKEN_SECRET;
    };

    generateAccessToken = () => {
        if (this.user === undefined) return 'User is not defined.'
        return jwt.sign(this.user, this.secretAccessToken, { expiresIn: this.time });
    };

    generateRefreshToken = () => {
        if (this.user === undefined) return 'User is not defined.'
        jwt.sign(this.user, this.secretRefreshToken);
    };

    verifyToken = (token, type) => {
        let secrect;
        if (type === 'accessToken') {
            secrect = this.secretAccessToken;
        }
        if (type === 'refreshToken') {
            secrect = this.secretRefreshToken;
        }
        return jwt.verify(token, secrect, (err, user) => {
            if (err) return err;
            if (user) return user;
        });
    };

};

module.exports = Authentication;