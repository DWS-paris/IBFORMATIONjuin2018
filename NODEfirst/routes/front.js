/*
Importer les composants de la route
*/
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/*
Configurer les routes
*/
router.get( `/`, ( req, res ) => {
    // Récupérer la collection depuis l'API
    fetch(`http://localhost:3000/todoes`)
    .then( data => data.json() )
    .then( data => res.render(`index`, { title: `My Todoes`, todoes: data } ) )
    .catch( err => console.error(err) )    
});

router.get( `/add`, ( req, res ) => {
    res.render(`add-todo`, { title: `Add new todo` } );  
});

/*
Exporter le module des routes
*/
module.exports = router;