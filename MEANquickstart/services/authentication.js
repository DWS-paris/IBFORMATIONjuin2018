/*
Imports
*/
    const JwtStrategy = require('passport-jwt').Strategy;
    const { ExtractJwt } = require('passport-jwt');
    const UserModel = require('../models/user.model');
// 

/*
Authentification via JWT
*/
    const authJwt = (passport) => {
        // Options JWT
        const options = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        };

        // Définition de la stratégie
        passport.use( new JwtStrategy( options, (tokenDecryptedData, callback) => {
            // Rechercher l'utilisateur
            UserModel.findOne( { _id: tokenDecryptedData._id }, (error, user) => {
                if( error ){
                    return callback(error, false)

                } else if(user){
                    return callback(null, user)

                } else{
                    return callback(null, false)
                }
            })
        }))
    }
//


/*
Exporter la stratégie
*/
    module.exports = {
        setAuthentication: (passport) => {
            authJwt(passport)
        }
    }
//