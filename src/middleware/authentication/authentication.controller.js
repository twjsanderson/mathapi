const jwt = require('jsonwebtoken');

const AuthenticationModel = require('./authentication.model.js');
const Encryption = require('../../util/encryption');
const ApiError = require('../../util/httpResponses/error/ApiError');

const { hash } = new Encryption; 
const { createRow, createTable, dropTable, getTable, getRowFromToken, getRowFromUserPass, deleteRowFromUserPass } = new AuthenticationModel;

class AuthenticationController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.time = '100000s'
        this.secretAccessToken = process.env.ACCESS_TOKEN_SECRET;
        this.secretRefreshToken = process.env.REFRESH_TOKEN_SECRET;
    };

    generateAccessToken = () => jwt.sign({ name: this.req.query.user }, this.secretAccessToken, { expiresIn: this.time });

    generateRefreshToken = () => jwt.sign({ name: this.req.query.user }, this.secretRefreshToken);

    verifyToken = (token, type) => {
        let secrect;
        if (type === 'accessToken') secrect = this.secretAccessToken;
        if (type === 'refreshToken') secrect = this.secretRefreshToken;
        return jwt.verify(token, secrect, (err, user) => {
            if (err) return { err: err };
            if (user) return { user: user };
        });
    };

    getTokens = async () => {
        // check user and password exist in request, this to be handled elsewhere
        if (!this.req.query.user || !this.req.query.pass) return this.res.sendStatus(401);
        
        // creds
        const newAccessToken = this.generateAccessToken();
        const newRefreshToken = this.generateRefreshToken();
        const hashedPassword = await hash(this.req.query.pass);
        const userName = this.req.query.user;

        const checkUserPass = await getRowFromUserPass(userName, hashedPassword);
        
         // if no user, create new user with creds and tokens DB check
        if (checkUserPass.severity) {
            const createNewRow = await createRow(this.req.query.user, hashedPassword, newAccessToken, newRefreshToken);
            // else throw error
            if (createNewRow.severity) return this.res.sendStatus(400);
        }
        
        // return user, access_token, refresh_token
        return this.res.json({ 
            user: this.req.query.user, 
            accessToken: newAccessToken, 
            refreshToken: newRefreshToken
        });
    };

    refresh = async () => {
        const refreshToken = this.req.body.refreshToken;
        if (!refreshToken || refreshToken === null) return this.res.sendStatus(401);

        // get user data from refresh token
        const checkUserExists = await getRowFromToken(refreshToken);
        if (checkUserExists.severity) return this.res.sendStatus(400);

        // verify refresh token
        const token = this.verifyToken(refreshToken, 'refreshToken');
        if (token.err) return this.res.sendStatus(401);

        // create new access token and update DB
        const newAccessToken = this.generateAccessToken();
        const { name } = checkUserExists;
        
        const updatedRow = await updateRowWithToken(name);
        if (updatedRow.severity) return this.res.sendStatus(401);

        return this.res.json({ accessToken: newAccessToken });
    };

    deleteTokens = async () => {
        const { name, password } = await getRowFromUser(this.req.query.user);
        const hashedPassword = await compareHash(this.req.query.pass, password);
        if (hashedPassword) {
            await deleteRowFromUserPass(name, hashedPassword)
            this.res.sendStatus(204)
        }
        return this.res.sendStatus(403);
    }

};

module.exports = AuthenticationController;