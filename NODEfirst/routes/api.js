/*
Importer les composants de la route
*/
const express = require('express');
const router = express.Router();
const apiUrl = `http://localhost:3000/todoes`;
const fetch = require('node-fetch');


/*
Définition des routes
*/
router.get('/', ( req, res ) => {
    // Envoyer dans la réponse des données en json
    res.json( { data: `HATEOAS for api` } )
});

router.post('/add', ( req, res ) => {
    console.log(req.body)
    // Vérifier la présence du body
    if( !req.body.content ) return res.json({ response: 'content param is needed' });

    // Créer la todo
    const newTodo = {
        content: req.body.content,
        isDone: false
    };
    
    // Ajouter une todo
    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: { 'Content-Type': 'application/json' },
    })
    .then( data => data.json() )
    .then( data => res.json( data ) )
    .catch( err => console.error(err) ) 
});

/*
Exporter le module des routes
*/
module.exports = router;