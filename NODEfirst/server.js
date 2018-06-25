/*
Importer les composants du serveur
*/
const express = require('express'); // Composant principal
const path = require('path'); // Définir le dossier des vues
const ejs = require('ejs'); // Système de templating
const bodyParser = require('body-parser'); // Analyser le corps des requêtes
require('dotenv').config() ; // Variable d'environement

/*
Définir les variables serveur
*/
const port = process.env.PORT;
let server = express();
const frontRoute = require(`./routes/front.js`);
const apiRoute = require(`./routes/api.js`);

/*
Configurer le serveur
*/
server.use( express.static( path.join(__dirname, 'www') ) );
server.set('view engine', 'ejs');

server.use( bodyParser.json({ limit: '10mb' }) );
server.use(bodyParser.urlencoded({ extended: true }));


// Définir les routes
server.use(`/`, frontRoute);
server.use(`/api`, apiRoute);

/*
Ecouter le serveur
*/
server.listen( port, () => {
    console.log( `Le serveur est lancé sur le port ${port}`);
});