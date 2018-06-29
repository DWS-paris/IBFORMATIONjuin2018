/*
Imports
*/
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from "@angular/common/http";
  import { TodoModel } from "../../models/todo.model";
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
  export class TodoService {

    // Définir l'adresse de l'API
    private apiUrl = '/api/todo'

    // Injecter le service HttpCLient dans la class
    constructor(
      private http: HttpClient
    ) { }

    // Créer une fonction afficher les Todo
    public getTodoes(): Promise<any> {
      // Utiliser une requête HTTP GET
      return this.http.get(`${this.apiUrl}`)
      .toPromise().then(this.getData).catch(this.handelError)
    }

    // Créer une fonction pour ajouter une todo
    public addNewTodo( todo: TodoModel, token: String ): Promise<any> {
      // Configurer la requête
      let myHeader = new HttpHeaders().set( 'Authorization', `Bearer ${token}`)

      // Utiliser une requête HTTP GET
      return this.http.post(`${this.apiUrl}`, todo, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handelError)
    }

    // Créer une fonction pour modifier une todo
    public editTodo( idParam: String, token: String ): Promise<any> {
      // Configurer la requête
      let myHeader = new HttpHeaders().set( 'Authorization', `Bearer ${token}`)

      // Utiliser une requête HTTP GET
      return this.http.put(`${this.apiUrl}`, { _id: idParam }, { headers: myHeader })
      .toPromise().then(this.getData).catch(this.handelError)
    }

    // Créer une fonction pour modifier une todo
    public deleteTodo( id: String, token: String ): Promise<any> {
      // Configurer la requête
      let myHeader = new HttpHeaders().set( 'Authorization', `Bearer ${token}`)

      // Utiliser une requête HTTP GET
      return this.http.delete(`${this.apiUrl}/${id}`, { headers: myHeader })
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