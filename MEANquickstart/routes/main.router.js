/*
Imports et configuration
*/
    const Router = require('express');
    const passport = require('passport');
    
    const AuthRouterClass = require('./auth/auth.routes');
    const UserRouterClass = require('./user/user.routes');
    const TodoRouterClass = require('./todo/todo.routes');
    const PublicRouterClass = require('./public/public.routes');
//

/*
Configurer la stratégie passport
*/
    const { setAuthentication } = require('../services/authentication');
    setAuthentication(passport);
//

/*
Création des routers
*/
    const apiRouter = Router({ mergeParams: true });
    const frontRouter = Router();
    
    const authRouter = new AuthRouterClass( { passport } );
    const userRouter = new UserRouterClass( { passport } );
    const todoRouter = new TodoRouterClass( { passport } );
    const publicRouter = new PublicRouterClass( { passport } );
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