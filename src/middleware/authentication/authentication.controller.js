const jwt = require('jsonwebtoken');

// Controllers
const AuthenticationModel = require('./authentication.model.js');

const { createRow, createTable, dropTable, getTable, getRow } = new AuthenticationModel;

class AuthenticationController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.time = '100000s'
        this.secretAccessToken = process.env.ACCESS_TOKEN_SECRET;
        this.secretRefreshToken = process.env.REFRESH_TOKEN_SECRET;
    };

    generateAccessToken = () => {
        return jwt.sign({ name: this.req.query.user, pass: this.req.query.pass }, this.secretAccessToken, { expiresIn: this.time });
    };

    generateRefreshToken = () => {
        return jwt.sign({ name: this.req.query.user, pass: this.req.query.pass }, this.secretRefreshToken);
    };

    verifyToken = (token, type) => {
        let secrect;
        if (type === 'accessToken') secrect = this.secretAccessToken;
        if (type === 'refreshToken') secrect = this.secretRefreshToken;
        return jwt.verify(token, secrect, (err, user) => {
            if (err) return { err: err };
            if (user) return { user: user };
        });
    };

    requestTokens = async () => {
        const accessToken = this.generateAccessToken();
        const refreshToken = this.generateRefreshToken();
        const create = await createTable();
        const newRow = await createRow(this.req.query.user, this.req.query.pass, accessToken, refreshToken);
        // const drop = await dropTable();
        const get = await getTable();
        console.log(create, newRow, get)
        this.res.json({ accessToken, refreshToken });
    };

    refreshToken = async () => {
        const refreshToken = this.req.body.refreshToken;
        if (!refreshToken || refreshToken === null) return this.res.sendStatus(401)
        const currRow = await getRow(refreshToken);
        if (currRow !== undefined) {
            const curr_access_token = currRow.rows[0].access_token;
            const token = this.verifyToken(refreshToken, 'refreshToken');
            if (token.err) return this.res.sendStatus(401);
            const accessToken = this.generateAccessToken();
            return this.res.json({ accessToken: curr_access_token });
        }
    };

    deleteRefreshToken = () => {
        const refreshToken = this.req.body.refreshToken;
        // DB call to delete token
        res.sendStatus(204)
    }

};

module.exports = AuthenticationController;