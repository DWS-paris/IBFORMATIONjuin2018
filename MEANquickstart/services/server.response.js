/*
Fonction pour envoyer les erreurs lors d'un problème avec les champs
*/
    const sendFieldsError = (response, errorMessage, miss, extra) => {
        return response.status(400).json({
            message: errorMessage,
            error: { miss, extra },
            data: null
        })
    }
//

/*
Fonction pour envoyer les données si tout va bien
*/
    sendApiSuccessResponse = ( response, successMessage, paramData ) => {
        return response.status(200).json({
            message: successMessage,
            error: null,
            data: paramData
        })
    }
//

/*
Exporter les fonctions du service
*/
    module.exports = {
        sendFieldsError,
        sendApiSuccessResponse,
    }
//