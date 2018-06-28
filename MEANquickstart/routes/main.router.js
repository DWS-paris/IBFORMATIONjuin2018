/* 
Imports & configuration 
*/
    const { Router } = require('express');
    const passport = require('passport');

    const UserRouterClass = require('./user/user.routes');
    const AuthRouterClass = require('./auth/auth.routes');
    const FrontRouterClass = require('./front/front.routes');
    const TodoRouterClass = require('./todo/todo.routes');
//

/* Passport Strategy */
const { setAuthentication } = require('../services/authentication');
setAuthentication(passport);

/* Define routers */
const mainRouter = Router({ mergeParams: true });
const apiRouter = Router({ mergeParams: true });

const authRouter = new AuthRouterClass({ passport });
const userRouter = new UserRouterClass({ passport });
const frontRouter = new FrontRouterClass({ passport });
const todoRouter = new TodoRouterClass({ passport });

/* Define routes */
mainRouter.use('/', frontRouter.init());
mainRouter.use('/api/', apiRouter);
apiRouter.use('/auth', authRouter.init());
apiRouter.use('/user', userRouter.init());
apiRouter.use('/todo', todoRouter.init());

/* Export */
module.exports = { mainRouter };