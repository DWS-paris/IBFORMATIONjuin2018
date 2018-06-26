/*
Import et configuration
*/
    const mongoose = require('mongoose');
    const logger = require('./logger');

    // Gestion des promesses
    mongoose.Promise = global.Promise;

    // Options de connexion
    const options = {
        socketTimeoutMS: 0,
        keepAlive: true,
        reconnectTries: 30
    };
//


/*
Fonctions principale sur la BDD
*/
    const initMongooseClient = () => {
        mongoose.connect( process.env.MONGO_URL, options ).then(
            () => { logger.info(`La base de données est connectée !`) },
            (err) => { logger.error(`Erreur de connexion`, err) }
        )
    };

    const closeMongooseClient = (cb) => {
        mongoose.connect.closeMongooseClient(cb);
    };
//


/*
Exporter les fonctions du service
*/
    module.exports = {
        initMongooseClient,
        closeMongooseClient
    };
//