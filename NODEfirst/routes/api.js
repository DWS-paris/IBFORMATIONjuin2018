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

router.post('/post/add', ( req, res ) => {
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
    .then( () => res.redirect(`/`) )
    .catch( err => console.error(err) ) 
});

router.delete('/post/:id', ( req, res ) => {

    // Récupérer le paramètre id de la route
    const todoId = parseInt(req.params.id);

    // Supprimer la todo
    fetch(`http://localhost:3000/todoes/${todoId}`, {
        method: "DELETE",
    })
    .then( data => res.redirect(`/`) )
    .catch( err => console.error(err) ) 
});

router.put('/post/:id', ( req, res ) => {

    // Vérifier la présence du body
    if( !req.body.content ) return res.json({ response: 'content param is needed' });

    // Récupérer le paramètre id de la route
    const todoId = parseInt(req.params.id);

    // Créer la todo
    const newTodo = {
        content: req.body.content
    };

    // Supprimer la todo
    fetch(`http://localhost:3000/todoes/${todoId}`, {
        method: "PUT",
        body: JSON.stringify(newTodo),
        headers: { 'Content-Type': 'application/json' }
    })
    .then( data => data.json() )
    .then( data => res.json( data ) )
    .catch( err => console.error(err) ) 
});

/*
Exporter le module des routes
*/
module.exports = router;