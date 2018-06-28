/*
Imports
*/
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http";
  import { UserModel } from "../../models/user.model";
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
  export class AuthService {

    // Définir l'adresse de l'API
    private apiUrl = '/api/auth'

    // Injecter le service HttpCLient dans la class
    constructor(
      private http: HttpClient
    ) { }

    // Créer une fonction pour enregistrer un utilisateur
    public userRegister( user: UserModel ): Promise<any> {

      // Supprimer la propriété repeatePassword de l'ojet user
      delete user.repeatePassword;

      // Configurer la requête
      let myHeader = new HttpHeaders().set( 'Content-Type', 'application/json')

      // 3 paramêtre : url, data, header + claccback
      return this.http.post(`${this.apiUrl}/register`, user, { headers: myHeader })
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