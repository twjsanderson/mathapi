const jwt = require('jsonwebtoken');
const { testDB } = require('../../db/db.js');

class AuthenticationController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.time = '100000s'
        this.secretAccessToken = process.env.ACCESS_TOKEN_SECRET;
        this.secretRefreshToken = process.env.REFRESH_TOKEN_SECRET;
    };

    generateAccessToken = () => {
        return jwt.sign({ name: this.req.query.user }, this.secretAccessToken, { expiresIn: this.time });
    };

    generateRefreshToken = () => {
        return jwt.sign({ name: this.req.query.user }, this.secretRefreshToken);
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
            if (err) return { err: err };
            if (user) return { user: user };
        });
    };

    // both need DB calls to check refreshTokens
    requestTokens = async () => {
        const accessToken = this.generateAccessToken();
        const refreshToken = this.generateRefreshToken();
        let test = await testDB();
        console.log(test)
        this.res.json({ accessToken, refreshToken });
    };

    refreshToken = () => {
        const refreshToken = this.req.body.refreshToken;
        if (refreshToken === null) return this.res.sendStatus(401)
        // if (!this.refreshTokens.includes(refreshToken)) return this.res.sendStatus(403)
        const token = this.verifyToken(refreshToken, 'refreshToken');
        if (token.err) return this.res.sendStatus(403)
        const accessToken = this.generateAccessToken()
        return this.res.json({ accessToken: accessToken })
    };

    deleteRefreshToken = () => {
        const refreshToken = this.req.body.refreshToken;
        // DB call to delete token
        res.sendStatus(204)
    }

};

module.exports = AuthenticationController;