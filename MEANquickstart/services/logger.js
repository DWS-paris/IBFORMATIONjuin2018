/*
Import et configuration
!!! Version 2.4.2 de Winston !!!
*/
    const winston = require('winston');
    require('winston-loggly-bulk');
//

/*
Fonctionnalités winston
*/
    // Initialisation
    winston.remove(winston.transports.Console);

    // Ajouter la console Winston pour le debug
    winston.add(winston.transports.Console, {
        level: 'debug',
        handleExceptions: true,
        colorize: true,
        json: false,
    });

    // Conserver la console en cas d'erreur
    winston.exitOnError = false;

    // Construction du message dans la console
    winston.stream = {
        write: msg => {
            winston.info(`> HTTP : ${msg.trim()}`)
        }
    };
//

/*
Exporter le service
*/
    module.exports = winston;
//