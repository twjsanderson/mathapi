const jwt = require('jsonwebtoken');

// Controllers
const AuthenticationModel = require('./authentication.model.js');

const { createRow, createTable, dropTable, getTable, getRowFromToken, getRowWithUserPass } = new AuthenticationModel;

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
        if (type === 'accessToken') secrect = this.secretAccessToken;
        if (type === 'refreshToken') secrect = this.secretRefreshToken;
        return jwt.verify(token, secrect, (err, user) => {
            if (err) return { err: err };
            if (user) return { user: user };
        });
    };
    // create an error handler to 
    // - create DB table if does not exist
    // - 

    // is there user and pass?
    //  - if yes,
    //      - does user already exist?
    //          - if yes, is this the correct password?
    //              - if yes, send tokens
    //              - if no, throw error
    //          - if no, create new user
    //              - send tokens
    //  - if no, throw error

    createAccount = async () => {

    };

    signIn = async () => {
        // check user and password exist in request
        if (!this.req.query.user || !this.req.query.pass) return this.res.sendStatus(401);
        
        // check if user and pass exist in DB / are correct ***NEED BCRYPT HERE
        const checkUserPass = getRowWithUserPass(this.req.query.user, this.req.query.pass);
        if (checkUserPass.severity) return this.res.sendStatus(402);
        
        // generate tokens
        const accessToken = this.generateAccessToken();
        const refreshToken = this.generateRefreshToken();


        const createNewRow = await createRow(this.req.query.user, this.req.query.pass, accessToken, refreshToken);
        const getNewRow = await getRowFromToken(refreshToken);
        if (createNewRow.severity || getNewRow.severity) return this.res.sendStatus(400);
        const newRow = getNewRow.rows[0];
        return this.res.json({ 
            user: newRow.name, 
            accessToken: newRow.access_token, 
            refreshToken: newRow.refresh_token 
        });
    };

    refresh = async () => {
        const refreshToken = this.req.body.refreshToken;
        if (!refreshToken || refreshToken === null) return this.res.sendStatus(401);
        const currRow = await getRow(refreshToken);
        if (currRow !== undefined) {
            const curr_access_token = currRow.rows[0].access_token;
            const token = this.verifyToken(refreshToken, 'refreshToken');
            if (token.err) return this.res.sendStatus(401);
            const accessToken = this.generateAccessToken();
            return this.res.json({ accessToken: curr_access_token });
        }
    };

    signOut = () => {
        const refreshToken = this.req.body.refreshToken;
        // DB call to delete token
        res.sendStatus(204)
    }

};

module.exports = AuthenticationController;