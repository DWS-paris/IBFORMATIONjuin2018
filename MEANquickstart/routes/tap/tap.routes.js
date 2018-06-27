/* Imports */
const express = require('express');
const tapRouter = express.Router({ mergeParams: true });
const { saveData, getData } = require('./tap.controller');
const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
const { checkFields } = require('../../services/request.checker');

/* Definition */
class TapRouterClass {

    constructor({ passport }) { this.passport = passport };

    routes(){

        // Route TAP register
        tapRouter.post('/register', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') }
            // Check fields in the body
            const { miss, extra, ok } = checkFields(['userName', 'score', 'humanDate'], req.body);
            //=> Error: bad fields
            if (!ok) { return sendFieldsError(res, 'Bad fields provided', miss, extra) }
            else{
                
                // Use controller
                saveData(req)
                .then( apiRes =>  sendApiSuccessResponse(res, 'Tap is registrated', apiRes))
                .catch( apiErr => sendApiErrorResponse(res, 'Error during proccessing', apiErr));
            }
        });

        // Route TAP get
        tapRouter.get('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // Use controller
            getData(req.user._id)
            .then( apiRes =>  sendApiSuccessResponse(res, 'Tap recived', apiRes))
            .catch( apiErr => sendApiErrorResponse(res, 'Error during proccessing', apiErr));
        })
        
    };

    // Initialize routes
    init(){
        this.routes();
        return tapRouter;
    };
};

/* Export */
module.exports = TapRouterClass;