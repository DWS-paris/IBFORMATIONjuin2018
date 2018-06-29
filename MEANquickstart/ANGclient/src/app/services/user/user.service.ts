/*
Imports
*/
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http";
//

/*
Definition
*/
  @Injectable({
    providedIn: 'root'
  })
//

/*
Export
*/
  export class UserService {

    // Définir l'adresse de l'API
    private apiUrl = '/api/user'

    // Injecter le service HttpCLient dans la class
    constructor(
      private http: HttpClient
    ) { }

    // Créer une fonction pour connecter un utilisateur
    public getUserInfos( token: String ): Promise<any> {
      // Configurer la requête
      let myHeader = new HttpHeaders().set( 'Authorization', `Bearer ${token}`)

      // Utiliser une requête HTTP GET
      return this.http.get(`${this.apiUrl}/me`, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handelError)
    }

    // Fonction pour traiter les success des requêtes
    private getData( response: any ){
      // return res || {};
      return Promise.resolve( response || {} );
    }

    // Fonction pour traiter les erreurs des requête
    private handelError( response: any ){
      return Promise.reject( response.error );
    }
  }
//