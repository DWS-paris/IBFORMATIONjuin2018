/* Imports & configuration */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');

/* Model definition */
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    cgu: Boolean,
});

/* Methodes */
UserSchema.methods.generateJwt = function generateJwt() {
    // Set JWT expiration: 20 days
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 59);

    // JWT creation
    return jwt.sign({
        _id: this._id,
        email: this.email,
        first_name: this.first_name,
        last_name: this.last_name,
        expiresIn: '10s', // FOR JWT
        exp: parseInt(expiry.getTime() / 1000, 10),
    }, process.env.JWT_SECRET);
};


/* Export */
const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;