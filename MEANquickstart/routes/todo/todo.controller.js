/* Imports */
const logger = require('../../services/logger');
const TodoModel = require('../../models/todo.model');

/* Methode */
const saveNewTodo = (req) => {

    return new Promise( (resolve, reject) => {

        // Vérifier que la todo est nouvelle
        TodoModel.findOne( { 
            content: req.body.content, 
            author: `${req.user.firstName} ${req.user.lastName}` 

        }, ( error, todo ) => {
            if(error){ return reject(error) } // Erreur de connexion
            else if(todo){ return reject(null) } // Todo existante
            else{
                TodoModel.create({
                    author: `${req.user.firstName} ${req.user.lastName}`,
                    content: req.body.content,
                    date: Date.now(),
                    isDone: false

                }, (error, todo) => {
                    return error ? reject(error) : resolve(todo);
                })
            }
        })

    })

}

/* Export */
module.exports = {
    saveNewTodo
};