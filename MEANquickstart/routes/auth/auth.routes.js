/*
Imports
*/
    const Router = require('express');
    const authRouter = Router();
    const checkFields = require('../../services/request.checker');
    const { sendFieldsError, sendApiSuccessResponse } = require('../../services/server.response');
    const { registerUser, logUser } = require('./auth.controller');
//


/*
Création d'une class pour gérer les routes
*/
    class AuthRouterClass {

        // La fonction constructore permet d'importer des données dans la class
        constructor(){};

        // Définition des routes
        routes(){

            authRouter.get(`/`, (req, res) => {
                res.json({ response: `HATEOAS for auth/` });
            });

            // Inscrire un utilisateur
            authRouter.post(`/register`, (req, res) => {
                // TODO: check body data

                // Vérification de la présence des bons champs dans le body
                const { miss, extra, ok } = checkFields([ `firstName`, `lastName`, `email`, `password`], req.body)
                
                // Vérifier la requête
                if(!ok){ sendFieldsError( res, `Bad fields provided`, miss, extra ) }
                else{
                    registerUser(req.body)
                    .then( data => {
                        sendApiSuccessResponse( res, `User registered`, data)
                    })
                    .catch( error => {
                        sendApiSuccessResponse( res, `User not registered`, error)
                    });
                };
            });

            // Connecter un utilisateur
            authRouter.post(`/login`, (req, res) => {
                // TODO: check body data

                // Vérification de la présence des bons champs dans le body
                const { miss, extra, ok } = checkFields([ `email`, `password`], req.body)
                
                // Vérifier la requête
                if(!ok){ sendFieldsError( res, `Bad fields provided`, miss, extra ) }
                else{
                    logUser(req.body)
                    .then( data => {
                        sendApiSuccessResponse( res, `User logged`, data)
                    })
                    .catch( error => {
                        sendApiSuccessResponse( res, `User not logged`, error)
                    });
                };
            });

            // Vérifier le token utilisateur
            authRouter.get(`/token`, (req, res) => {
                
            });
        }

        // Initialiser le router
        init(){
            // Lancer la fonction routes()
            this.routes();""

            // Renvoyer le router
            return authRouter;
        }

    }
//


/*
Exporter la class du router
*/
    module.exports = AuthRouterClass;
//