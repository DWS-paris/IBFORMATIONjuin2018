/* Imports */
const express = require('express');
const frontRouter = express.Router({ mergeParams: true });

/* Definition */
class FrontRouterClass {

    constructor({ passport }) { this.passport = passport }

    routes(){
        frontRouter.get( ['/', '/me', '/tap'], (req, res) => { res.render('index') });
    };

    init(){
        this.routes();
        return frontRouter;
    }
}

/* Export */
module.exports = FrontRouterClass;