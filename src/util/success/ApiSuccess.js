class ApiSuccess {
    constructor(res) {
        this.res = res;
    }

    success = (code, operation, type) => {
        return this.res.status(code).send({
            operation,
            type
        });
    };
};

module.exports = ApiSuccess;