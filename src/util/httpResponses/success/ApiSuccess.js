class ApiSuccess {
    constructor(res) {
        this.res = res;
    }

    success = (code, operation, answer) => {
        return this.res.status(code).send({
            operation,
            answer
        });
    };
};

module.exports = ApiSuccess;