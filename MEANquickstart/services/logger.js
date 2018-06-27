
const winston = require('winston');
require('winston-loggly-bulk');

// #Remove previous logger console
winston.remove(winston.transports.Console);

// #Add new Console logger
winston.add(winston.transports.Console, {
    level: 'debug',
    handleExceptions: true,
    colorize: true,
    json: false,
});

winston.add(winston.transports.File, {
    filename: './error.log',
    level: 'error',
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: true,
});

// Maintain log
winston.exitOnError = false;

// Logger method for Morgan
winston.stream = {
  write: (message) => {
    winston.info(`>HTTP : ${message.trim()}`);
  },
};

module.exports = winston;
