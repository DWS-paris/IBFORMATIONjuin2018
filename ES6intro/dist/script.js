'use strict';

/*
Les variables ES6
- Les varaible ES6 classique sont des "let"
- Les constantes sont des "const"
*/
var firstName = 'Julien';
var birthYear = 1979;
var myTitle = document.getElementsByTagName('h1')[0];

/*
Le templating ES6 : les backquotes ``
- multiligne possible
- simplification de la concatènation : ${...}
- éviter les erreurs avec les ' et les "
*/
myTitle.innerHTML = '\n    Bonjour ' + firstName + ', comment \xE7a ? \n    <i>Vous avez ' + (2018 - birthYear) + ' ans.</i>\n';

/*
Les fonctions fléchées
- Sur une ligne = retourne automatiquement le résultat (return implicite)
- Il est possible d'ajouter une valeur par defaut au paramètre
- Pour un paramètre sans valeur par defaut = pas de parenthèses
*/
var twice = function twice() {
    var paramNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    return paramNumber * 2;
};
console.log(twice(12));
console.log(twice());

/*
Rest parameter dans les fonctions
*/
var restFunction = function restFunction(userName) {
    for (var _len = arguments.length, skills = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        skills[_key - 1] = arguments[_key];
    }

    console.log('User name: ' + userName);
    console.log('User skills:');

    // Le paramètre du reste place les paramètres dans un tableau
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = skills[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            console.log(item);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

restFunction('Julien Noyer', 'Javascript', 'ES6', 'PAO');
restFunction('Paul Bismuth', 'Politique');

/*
Spread operator pour les tableaux
*/
var userHardSkills = ['Javascript', 'ES6', 'PAO'];
var userSoftSkills = ['Cuisine', 'Humour'];

var allUserSkills = [].concat(userHardSkills, userSoftSkills);

console.log(allUserSkills);