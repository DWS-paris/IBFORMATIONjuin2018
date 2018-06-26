/*
Imports et configuration
*/
    const Router = require('express');
    const authRouter = Router();
    const checkFields = require('../../services/request.checker');
    const { sendFieldsError, sendApiSuccessResponse } = require('../../services/server.response');
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

            authRouter.post(`/register`, (req, res) => {
                // TODO: check body data

                // Vérification de la présence des bons champs dans le body
                const { miss, extra, ok } = checkFields([ `firstName` ], req.body)
                
                // Vérifier la requête
                if(!ok){ sendFieldsError( res, `Bad fields provided`, miss, extra ) }
                else{
                    sendApiSuccessResponse( res, `User registered`, [`someData`] )
                }
            });

        }

        // Initialiser le router
        init(){
            // Lancer la fonction routes()
            this.routes();

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