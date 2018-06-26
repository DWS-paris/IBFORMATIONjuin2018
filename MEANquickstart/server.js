/*
Imports et configuration
*/
    // Ajouter les variables d'environement
    require('dotenv').config();

    // Importer les composants serveurs
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const ejs = require('ejs');

    // Importer les services
    const db = require('./services/db');
    const logger = require('./services/logger');

    // Importer le module des routes
    const mainRouter = require('./routes/main.router');

    // Configuration du serveur
    const appServer = express();
    const port = process.env.PORT;
//


/*
Initialisation du serveur
*/
    const serverInit = () => {
        // Connecter le serveur à la base de données
        db.initMongooseClient();

        // Configurer le moteur de rendu
        appServer.engine( 'html', ejs.renderFile );
        appServer.set( 'view engine', 'html' );
        
        // Configurer le dossier pour les vues front
        appServer.set( 'views', __dirname + '/www' );
        appServer.use( express.static(path.join(__dirname, 'www')) );

        // Configurer body-parser
        appServer.use( bodyParser.json({limit: '10mb'}) );
        appServer.use( bodyParser.urlencoded({ extended: true }) );

        // Configurer le router
        appServer.use( `/`, mainRouter );

        // Ecouter le serveur
        appServer.listen( port, () => logger.info(`Le server est lancé sur le port ${port}`) );
    };

    // Lancer le serveur
    serverInit();
//