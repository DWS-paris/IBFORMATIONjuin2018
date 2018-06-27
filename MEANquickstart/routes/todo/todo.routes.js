/* Imports */
const express = require('express');
const todoRouter = express.Router({ mergeParams: true });
const { sendBodyError, sendFieldsError, sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/server.response');
const { checkFields } = require('../../services/request.checker');
const { getTodoes, saveNewTodo, editTodo, deleteTodo } = require('./todo.controller');

/* Definition */
class TodoRouterClass {
    
    // Utiliser le constructor pour injecter des données dans le class
    constructor( { passport } ) { this.passport = passport };

    routes(){
        
        // Route principale
        todoRouter.get('/', (req, res) => {
            getTodoes()
            .then( apiRes =>  sendApiSuccessResponse(res, 'Todoes send', apiRes))
            .catch( apiErr => sendApiErrorResponse(res, 'Error during fetching todo', apiErr));
        })

        // Ajouter une todo
        todoRouter.post('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') }
            // Check fields in the body
            const { miss, extra, ok } = checkFields(['content', 'type'], req.body);
            //=> Error: bad fields
            if (!ok) { return sendFieldsError(res, 'Bad fields provided', miss, extra) }
            else{
                // Use controller
                saveNewTodo(req)
                .then( apiRes =>  sendApiSuccessResponse(res, 'Todo created', apiRes))
                .catch( apiErr => sendApiErrorResponse(res, 'Error during todo creation', apiErr));
            } 
        })

        // Modifier une todo
        todoRouter.put('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') }
            // Check fields in the body
            const { miss, extra, ok } = checkFields(['_id'], req.body);
            //=> Error: bad fields
            if (!ok) { return sendFieldsError(res, 'Bad fields provided', miss, extra) }
            else{
                // Use controller
                editTodo(req.body)
                .then( apiRes =>  sendApiSuccessResponse(res, 'Todo updated', apiRes))
                .catch( apiErr => sendApiErrorResponse(res, 'Error during todo update', apiErr));
            } 
        })

        // Supprimer une todo
        todoRouter.delete('/', this.passport.authenticate('jwt', { session: false }), (req, res) => {
            // Error: no body present
            if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') }
            // Check fields in the body
            const { miss, extra, ok } = checkFields(['_id'], req.body);
            //=> Error: bad fields
            if (!ok) { return sendFieldsError(res, 'Bad fields provided', miss, extra) }
            else{
                // Use controller
                deleteTodo(req.body)
                .then( apiRes =>  sendApiSuccessResponse(res, 'Todo deleted', apiRes))
                .catch( apiErr => sendApiErrorResponse(res, 'Error during todo deletation', apiErr));
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