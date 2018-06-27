/*
Import
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
    const jwt = require('jsonwebtoken');
//


/*
Définition du schema
*/
    const UserSchema = new Schema({
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        cgu: Boolean
    });
//

/*
Créer une méthode pour générer un token utilisateur
*/
    UserSchema.methods.generateJwt = function generateJwt(){
        // Définire la durée de vie du token
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 9) // 10 jours

        // Création du token
        return jwt.sign({
            _id: this._id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            expiresIn: '10s', // Le token est disponible sur le SERVEUR 10s
            exp: parseInt(expiry.getTime() / 1000, 1 ) // Le token est actif sur le CLMIENT 10j

        }, process.env.JWT_SECRET);
    }
//

/*
Définir et exporter le model
*/
    const UserModel = mongoose.model('user', UserSchema);
    module.exports = UserModel;
//