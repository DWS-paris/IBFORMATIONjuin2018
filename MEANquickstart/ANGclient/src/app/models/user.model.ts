/*
Les models objet en TypeScript sont des interfaces
- Le "?" indique que le paramêtre est optionnel
*/
    export interface UserModel {
        firstName?: String,
        lastName?: String,
        email: String,
        password: String,
        repeatePassword?: String,
        cgu?: Boolean,
        _id?: String,
    }
//