/*
Imports et configuration
*/
    const Router = require('express');
    const userRouter = Router();
//


/*
Création d'une class pour gérer les routes
*/
    class UserRouterClass {

        // La fonction constructore permet d'importer des données dans la class
        constructor(){};

        // Définition des routes
        routes(){

            userRouter.get(`/`, (req, res) => {
                res.json({ response: `HATEOAS for user/` });
            });

        }

        // Initialiser le router
        init(){
            // Lancer la fonction routes()
            this.routes();

            // Renvoyer le router
            return userRouter;
        }

    }
//


/*
Exporter la class du router
*/
    module.exports = UserRouterClass;
//