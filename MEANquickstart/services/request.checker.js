/*
Création d'une fonction pour vérifier les données envoyées dans le body
*/
    const checkFields = ( fields, body ) => {
        // Definir deux tableaux
        const miss = [];
        const extra = [];

        // Vérifier le champs manquant
        fields.forEach( prop => {
            if( !(prop in body) ) { miss.push(prop) }
        });

        // Vérifier les champs en trop
        for( let prop in body ){
            if( fields.indexOf(prop) === -1 ) { extra.push(prop) }
        };

        // Créer un objet lorsqu'il n'y à pas d'erreur
        const ok = (extra.length === 0 && miss.length === 0);

        // Renvoyer les données
        return { ok, extra, miss };
    }
//


/*
Exporter le service
*/
    module.exports = checkFields;
//