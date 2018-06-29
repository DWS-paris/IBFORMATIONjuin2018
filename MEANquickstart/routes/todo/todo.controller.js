/* Imports */
const logger = require('../../services/logger');
const TodoModel = require('../../models/todo.model');

/* Methode */
const getTodoes = () => {

    return new Promise( (resolve, reject) => {
        // Récupérer tous les todoes
        TodoModel.find( (error, todoes) => {
            return error ? reject(error) : resolve(todoes)
        });
    });
};


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

const editTodo = (body) => {

    return new Promise( (resolve, reject) => {
        // Rechercher et mettre à jour la todo
        TodoModel.findById( body._id, (error, todo) => {
            if(error){ return reject(error) } // Problème de connexion
            else{
                // Mettre à jour la todo
                todo.isDone = !todo.isDone;

                // Enregistrer la modification
                todo.save( (error, todo) =>{
                    if(error){ return reject(error) }
                    else{ return resolve(todo) }
                })
            }
        })
    })
}

const deleteTodo = (id) => {

    return new Promise( (resolve, reject) => {
        // Rechercher et mettre à jour la todo
        TodoModel.findById( id, (error, todo) => {
            if(error){ return reject(error) } // Problème de connexion
            else{
                // Mettre à jour la todo
                todo.isDone = !todo.isDone;

                // Enregistrer la modification
                todo.remove( (error, todo) =>{
                    if(error){ return reject(error) }
                    else{ return resolve(todo) }
                })
            }
        })
    })
}

/* Export */
module.exports = {
    getTodoes,
    saveNewTodo,
    editTodo,
    deleteTodo
};