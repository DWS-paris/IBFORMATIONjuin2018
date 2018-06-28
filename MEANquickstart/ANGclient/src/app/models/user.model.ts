/*
Les models objet en TypeScript sont des interfaces
*/
    export interface UserModel {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        repeatePassword?: String,
        cgu: Boolean,
        _id?: String,
    }
//