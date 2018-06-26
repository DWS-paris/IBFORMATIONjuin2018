/*
Imports et configuration
*/
    const Router = require('express');
    const todoRouter = Router();
//


/*
Création d'une class pour gérer les routes
*/
    class TodoRouterClass {

        // La fonction constructore permet d'importer des données dans la class
        constructor(){};

        // Définition des routes
        routes(){

            todoRouter.get(`/`, (req, res) => {
                res.json({ response: `HATEOAS for todo/` });
            });

        }

        // Initialiser le router
        init(){
            // Lancer la fonction routes()
            this.routes();

            // Renvoyer le router
            return todoRouter;
        }

    }
//


/*
Exporter la class du router
*/
    module.exports = TodoRouterClass;
//