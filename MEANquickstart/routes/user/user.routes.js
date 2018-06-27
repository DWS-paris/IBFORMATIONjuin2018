/* Imports */
const { Router } = require('express');
const userRouter = Router({ mergeParams: true });
const { editData, getData } = require('./user.controller');
const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
const { checkFields } = require('../../services/request.checker');

/* Definition */
class UserRouterClass {
    constructor({ passport }) { this.passport = passport };

    routes() {
        // Route USER get data
        userRouter.get('/me', this.passport.authenticate('jwt', { session: false }), (req, res) => {

            console.log(req.user)

            getData(req)
            .then( apiRes =>  sendApiSuccessResponse(res, 'User data saved', apiRes))
            .catch( apiErr => sendApiErrorResponse(res, 'Error during processing', apiErr));
        });
    };

    init() {
        this.routes();
        return userRouter;
    }
};

/* Export */
module.exports = UserRouterClass;