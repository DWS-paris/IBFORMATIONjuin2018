/*
Import
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
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
Définir et exporter le model
*/
    const UserModel = mongoose.model('user', UserSchema);
    module.exports = UserModel;
//