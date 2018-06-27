/*
Imports
*/
    const UserModel = require('../../models/user.model');
    const bcrypt = require('bcrypt');
//

/*
Ecrire une fonction pour inscrire un utilisateur
*/
    const registerUser = (body) => {
        
        // Intégrer la gestion des promesses
        return new Promise( (resolve, reject) => {

            // Vérifier l'adresse mail
            UserModel.findOne( { email: body.email }, (error, user) => {
                if(error){ // Erreur de connexion
                    return reject(error);

                } else if(user){ // Email existant
                    return reject(error);

                } else {

                    // Crypter le mot de passe
                    bcrypt.hash( body.password, 10 )
                    .then( hashedPassword => {
                        // Inscrire l'utilisateur
                        UserModel.create({
                            firstName: body.firstName,
                            lastName: body.lastName,
                            email: body.email,
                            password: hashedPassword,
                            cgu: true

                        }, (error, data) => {
                            if(error){
                                return reject(error);

                            } else{
                                return resolve(data)
                            }
                        })
                    })
                    .catch( error => {
                        return reject(error);
                    })



                    
                }
            })
        });
    };
//

/*
Exporter le fonctions du contrôleur
*/
    module.exports = {
        registerUser
    }
//