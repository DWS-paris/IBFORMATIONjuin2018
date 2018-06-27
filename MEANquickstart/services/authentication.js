/* Imports */
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const UserModel = require('../models/user.model');

/* JWT authentication */
const authJwt = (passport) => {
    // #JWT Options for passport
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    };
    
    // #JWT strategy
    passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
        UserModel.findOne({ _id: jwtPayload._id }, (err, user) => {
            if (err) { return done(err, false)}
            if (user) { return done(null, user) }
            else { return done(null, false) }
        });
    }));
};

/* Export */
    module.exports = {
        // #JWT implementation
        setAuthentication: (passport) => {
            authJwt(passport);
        },
    };