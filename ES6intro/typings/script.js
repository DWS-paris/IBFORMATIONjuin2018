/*
Les variables ES6
- Les varaible ES6 classique sont des "let"
- Les constantes sont des "const"
*/
let firstName = `Julien`;
const birthYear = 1979;
let myTitle = document.getElementsByTagName('h1')[0];



/*
Le templating ES6 : les backquotes ``
- multiligne possible
- simplification de la concatènation : ${...}
- éviter les erreurs avec les ' et les "
*/
myTitle.innerHTML = `
    Bonjour ${ firstName}, comment ça ? 
    <i>Vous avez ${ 2018 - birthYear} ans.</i>
`;


/*
Les fonctions fléchées
- Sur une ligne = retourne automatiquement le résultat (return implicite)
- Il est possible d'ajouter une valeur par defaut au paramètre
- Pour un paramètre sans valeur par defaut = pas de parenthèses
*/
const twice = (paramNumber = 5) => paramNumber * 2;
console.log(twice(12));
console.log(twice());

/*
Rest parameter dans les fonctions
*/
const restFunction = (userName, ...skills) => {
    console.log(`User name: ${userName}`);
    console.log(`User skills:`)

    // Le paramètre du reste place les paramètres dans un tableau
    for (let item of skills) { console.log(item) }
};

restFunction(`Julien Noyer`, `Javascript`, `ES6`, `PAO`);
restFunction(`Paul Bismuth`, `Politique`);

/*
Spread operator pour les tableaux
*/
let userHardSkills = [`Javascript`, `ES6`, `PAO`];
let userSoftSkills = [`Cuisine`, `Humour`];

let allUserSkills = [...userHardSkills, ...userSoftSkills];

console.log(allUserSkills)