/* Imports */
const express = require('express');
const todoRouter = express.Router({ mergeParams: true });
const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
const { checkFields } = require('../../services/request.checker');

/* Definition */
class TodoRouterClass {
    
    // Utiliser le constructor pour injecter des données dans le class
    constructor( { passport } ) { this.passport = passport };

    routes(){
        
        // Route principale
        todoRouter.get('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            res.json('HATEAOS for api/todo/')
        })

        // Ajouter une todo
        todoRouter.post('/add', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') }
            // Check fields in the body
            const { miss, extra, ok } = checkFields(['content', 'type'], req.body);
            //=> Error: bad fields
            if (!ok) { return sendFieldsError(res, 'Bad fields provided', miss, extra) }
            else{
                // Use controller
                
            } 
        })
    }

    init(){
        this.routes();
        return todoRouter;
    }
}

/* Export */
module.exports = TodoRouterClass;