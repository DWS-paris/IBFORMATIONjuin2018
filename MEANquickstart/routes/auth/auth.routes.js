/* Imports */
const express = require('express');
const authRouter = express.Router({ mergeParams: true });
const { saveData, logUser } = require('./auth.controller');
const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
const { checkFields } = require('../../services/request.checker');

/* Definition */
class AuthRouterClass {

    constructor({ passport }) { this.passport = passport };

    routes(){

        // Route AUTH register user
        authRouter.post('/register', (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') }
            // Check fields in the body
            const { miss, extra, ok } = checkFields(['firstName', 'lastName', 'email', 'password', 'cgu'], req.body);
            //=> Error: bad fields
            if (!ok) { return sendFieldsError(res, 'Bad fields provided', miss, extra) }
            else{
                
                // Use controller
                saveData(req.body)
                .then( apiRes =>  sendApiSuccessResponse(res, 'User is registrated', apiRes))
                .catch( apiErr => sendApiErrorResponse(res, 'Error during user registration', apiErr));
            }
        })

        // Route AUTH login user
        authRouter.post('/login', (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') }
            // Check fields in the body
            const { miss, extra, ok } = checkFields(['email', 'password'], req.body);
            //=> Error: bad fields
            if (!ok) { sendFieldsError(res, 'Bad fields provided', miss, extra) }
            else{
                logUser(req.body)
                .then( apiRes =>  sendApiSuccessResponse(res, 'User is logged in', apiRes))
                .catch( apiErr => sendApiErrorResponse(res, 'Error during user login', apiErr));
            }
        })
        
    };

    // Initialize routes
    init(){
        this.routes();
        return authRouter;
    };
};

/* Export */
module.exports = AuthRouterClass;