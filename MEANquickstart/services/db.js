const mongoose = require('mongoose');
const logger = require('./logger');

mongoose.Promise = global.Promise; 

const options = {
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30,
};

const initMongooseClient = () => {
  mongoose.connect(process.env.MONGO_URL, options).then(
    () => { logger.info('Connection to mongoose alive !') },
    (err) => { logger.error('Unable to connect to mongoose', err) }
  );
};

const closeMongooseClient = (cb) => {
  mongoose.connection.close(cb);
};

module.exports = {
  initMongooseClient,
  closeMongooseClient,
}
