/*
Imports et configuration
*/
    const Router = require('express');
    const AuthRouterClass = require('./auth/auth.routes');
    const UserRouterClass = require('./user/user.routes');
    const TodoRouterClass = require('./todo/todo.routes');
    const PublicRouterClass = require('./public/public.routes');
//

/*
Création des routers
*/
    const apiRouter = Router();
    const frontRouter = Router();
    
    const authRouter = new AuthRouterClass();
    const userRouter = new UserRouterClass();
    const todoRouter = new TodoRouterClass();
    const publicRouter = new PublicRouterClass();
//

/*
Définition des routes
*/
    apiRouter.use( `/api/auth`, authRouter.init() );
    apiRouter.use( `/api/user`, userRouter.init() );
    apiRouter.use( `/api/todo`, todoRouter.init() );
    frontRouter.use( `/`, publicRouter.init() );
//

/*
Exporter le module des routes
*/
    module.exports = apiRouter;
//