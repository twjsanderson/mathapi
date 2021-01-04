require('dotenv').config();

const jwt = require('jsonwebtoken');

class AuthenticationController {
    constructor(req, res) {
        this.refreshTokens = [];
        this.req = req;
        this.res = res;
        this.time = '20s'
        this.secretAccessToken = process.env.ACCESS_TOKEN_SECRET;
        this.secretRefreshToken = process.env.REFRESH_TOKEN_SECRET;
    };

    generateAccessToken = () => {
        return jwt.sign({name: this.req.query.user}, this.secretAccessToken, { expiresIn: this.time });
    };

    generateRefreshToken = () => {
        return jwt.sign({name: this.req.query.user}, this.secretRefreshToken);
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

    requestTokens = () => {
        const accessToken = this.generateAccessToken();
        const refreshToken = this.generateRefreshToken();
        this.refreshTokens.push(refreshToken);
        this.res.json({ accessToken, refreshToken });
    };

};

module.exports = AuthenticationController;