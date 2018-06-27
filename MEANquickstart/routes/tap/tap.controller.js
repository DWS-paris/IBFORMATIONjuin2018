/* Imports */
const TapModel = require('../../models/tap.model');
const bcrypt = require('bcryptjs');
const logger = require('../../services/logger');

/* Methodes */
    // Save Data
    const saveData = (req) => {
        return new Promise((resolve, reject) => {
            TapModel.create({
                author: req.user._id,
                userName: req.body.userName,
                score: req.body.score,
                humanDate: req.body.humanDate,
                date: new Date(),
                
            }, (error, user) => {
                if(error) { 
                    logger.error(`Tap not registered`, [`POST /tap/register`, `TapModel.create`]);
                    return reject(error);
                    }
                else { return resolve(user) }
            });
        });
    };

    // get Data
    const getData = (_id) => {
        return new Promise((resolve, reject) => {
            TapModel.find((error, posts) => {
                if(error) { 
                    logger.error(`Enable to get Taps for author ${_id}`, [`GET /tap`, `TapModel.find`]);
                    reject(error);
                }
                else { resolve(posts) }
            });
        });
    };
//

/* Export */
module.exports = {
    saveData,
    getData,
};