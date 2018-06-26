/*
Imports et configuration
*/
    const Router = require('express');
    const publicRouter = Router();
//


/*
Création d'une class pour gérer les routes
*/
    class PublicRouterClass {

        // La fonction constructore permet d'importer des données dans la class
        constructor(){};

        // Définition des routes
        routes(){

            publicRouter.get(`/`, (req, res) => {
                res.render('index');
            });

        }

        // Initialiser le router
        init(){
            // Lancer la fonction routes()
            this.routes();

            // Renvoyer le router
            return publicRouter;
        }

    }
//


/*
Exporter la class du router
*/
    module.exports = PublicRouterClass;
//