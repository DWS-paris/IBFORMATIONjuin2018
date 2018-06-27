/* Imports */
const UserModel = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const logger = require('../../services/logger');

/* Methodes */
    // Save Data
    const saveData = (bodyParams) => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ email: bodyParams.email }, (error, user) => {          
                if (error) { 
                    logger.error(`Request error`, [`POST /user/register`, `UserModel.findOne`]);
                    return reject(error);
                } 
                else if(user){ 
                    logger.error(`Email already used`, [`POST /user/register`, `UserModel.findOne`]);
                    return reject(`Email already used`);
                }
                else {
                    bcrypt.hash(bodyParams.password, 10)
                    .then( hash => { 
                        const userPasswordHash = hash
                        UserModel.create({
                            firstName: bodyParams.firstName,
                            lastName: bodyParams.lastName,
                            email: bodyParams.email,
                            password: userPasswordHash,
                            cgu: true,
                            
                        }, (error, user) => {
                            if(error) { 
                                logger.error(`User not created`, [`POST /user/register`, `UserModel.create`]);
                                return reject(error);
                                }
                            else { return resolve(user) }
                        });
                    })
                    .catch( error => {
                        logger.error(`Error during hash`, [`POST /user/register`, `bcrypt.hash`]);
                        reject(error);
                    }) 
                };
            });
        });
    };

    // Log user: login, password
    const logUser = (bodyParams) => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ email: bodyParams.email },  (error, user) => {
                if(error) { 
                    logger.error(`Request error`, [`POST /user/login`, `UserModel.findOne`]);
                    return reject(error);
                }
                else if (!user) { 
                    logger.error(`Unknow user`, [`POST /user/login`, `UserModel.findOne`]);
                    return reject(`Unknow user`)
                }
                else {
                    const passwordIsValid = bcrypt.compareSync(bodyParams.password, user.password);
                    if (!passwordIsValid) { 
                        logger.error(`Password not valid`, [`POST /user/login`, `bcrypt.compareSync`]);
                        return reject(`Password not valid`);

                    } else{ return resolve({user: user, token: user.generateJwt() }) }
                };
            });
        })
    }
//

/* Export */
module.exports = {
    saveData,
    logUser,
};