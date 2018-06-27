
/*
Imports and configuration
*/
  //=> Add the .env variable to the environnement variables
  require('dotenv').config();

  //=> Extern dependencies
  const express = require('express');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const cookieParser = require('cookie-parser');
  const mongoose = require('mongoose');
  const path = require('path');
  const ejs = require('ejs');
  const rewrite = require('express-url-rewrite');

  //=> Intern Tools
  const db = require('./services/db');
  const logger = require('./services/logger');

  //=> Routes
  const { mainRouter } = require('./routes/main.router');

  //=> Express  
  const port = process.env.PORT || 3000;
  const appServer = express();
// 


/*
Server initialisation
*/
  const init = () => {
    //=> Mongoose
    db.initMongooseClient();

    //=> Use path to add views
    appServer.engine( 'html', ejs.renderFile );
    appServer.set( 'view engine', 'html' );
    appServer.set( 'views', __dirname + '/www' );
    appServer.use( express.static(path.join(__dirname, 'www')) );

    //=> CORS
    appServer.use(cors());

    //=> Body Parser
    appServer.use(bodyParser.json({limit: '10mb'}));
    appServer.use(bodyParser.urlencoded({ extended: true }));

    //=> Cookie parser
    appServer.use(cookieParser());

    //=> Server mainRouter
    appServer.use('/', mainRouter);
    
    //=> Ready to listen
    appServer.listen(port, () => logger.info(`App is running on port ${port}`) );
  };

  //=> Launch server
  init();
// 


/*
Handle Uncaught Exception / handle the error safely
*/
  process.on('uncaughtException', (err) => logger.error('uncaughtException', err) );
// 