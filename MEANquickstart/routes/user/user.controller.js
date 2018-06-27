/* Imports */
const UserSchema = require('../../models/user.model');
const bcrypt = require('bcryptjs');
const logger = require('../../services/logger');

/* Methodes */
    // Update Infos
    const editData = (jwtData, bodyParams) => {
        return new Promise((resolve, reject) => {
            UserSchema.findByIdAndUpdate(jwtData._id, bodyParams, {new: true},  (error, user) => { 
                if (error) { 
                    logger.error(`User not updated`, [`PUT /user`, `UserSchema.findByIdAndUpdate`]);
                    return reject(error);

                } else { return resolve(user) };
            }); 
        })
    }

    // Get Infos
    const getData = (req) => {
        return new Promise((resolve, reject) => {
            UserSchema.findById(req.user._id,  (error, singleUser) => {
                if (error) { 
                    logger.error(`Request error`, [`GET /user`, `UserSchema.findById`]);
                    return reject(err)
                }
                else if (!singleUser) { 
                    logger.error(`Unknow user`, [`GET /user`, `UserSchema.findById`]);
                    return reject(`Unknow user`);
                }
                else { resolve( singleUser ) }
            });
        });
    }
// 

/* Export */
module.exports = {
    editData,
    getData,
};