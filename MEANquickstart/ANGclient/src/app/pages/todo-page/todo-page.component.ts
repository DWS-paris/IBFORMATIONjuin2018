/*
Imports
*/
  // Angular components
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";

  // APP components
  import { UserService } from "../../services/user/user.service";
  import { TodoService } from "../../services/todo/todo.service";
  import { TodoModel } from "../../models/todo.model";
//

/*
Defintion
*/
  @Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',

    // Les services sont à ajouter dans le tableau des providers
    providers: [ UserService, TodoService ]
  })
//

/*
Export
*/
  export class TodoPageComponent implements OnInit {

    private userToken: String;
    public todoCollection: Array<TodoModel>;

    public todoObject: TodoModel = {
      content: ``
    }
    
    // Injection des services et du router
    constructor(
      private userService: UserService,
      private todoService: TodoService,
      private router: Router
    ) { }

    // Creaétion d'une fonction pour chager les todoes
    private fetchTodoes = () =>{
      // Contacter le service pour récupérer les todoes
      this.todoService.getTodoes()
      .then( (apiResponse) => {
        console.log(apiResponse)
        this.todoCollection = apiResponse.data;
      })
      .catch( (apiResponse) => {
        console.error( apiResponse )
      })
    }

    // Création d'une fonction pour connecter automatiquement l'utilisateur avec son token
    private checkUserToken = () => {
      if(this.userToken != undefined){
        // Contacter le service pour inscrire l'utilisateur
        this.userService.getUserInfos(this.userToken)
        .then( (apiResponse) => {
          console.log(apiResponse)
        })
        .catch( () => {
          // Rediriger l'utilisateur vers la page todo
          this.router.navigateByUrl('/');

          // Supprimer le faux token
          localStorage.removeItem('MEANtoken')
        })

      } else{
        // Rediriger l'utilisateur vers la home page
        this.router.navigateByUrl('/');
      }
    }

    // Création d'une fonction pour ajouter une todo
    public registerNewTodo = ( todo: TodoModel ) => {
      // Contacter le service pour ajouter une todo
      this.todoService.addNewTodo( todo, this.userToken )
      .then( (apiResponse) => {
        console.log(apiResponse)
        this.fetchTodoes()
      })
      .catch( (apiResponse) => {
        console.error( apiResponse )
      })

    };

    // Création d'une fonction pour éditer/supprimer une todo
    public modifyTodo = ( event: any ) => {
      if( event.action === 'edit' ){
        this.todoService.editTodo(event._id, this.userToken)
        .then( (apiResponse) => {
          console.log(apiResponse)
          this.fetchTodoes()
        })
        .catch( (apiResponse) => {
          console.error( apiResponse )
        })
      }

      if( event.action === 'delete' ){
        this.todoService.deleteTodo(event._id, this.userToken)
        .then( (apiResponse) => {
          console.log(apiResponse)
          this.fetchTodoes()
        })
        .catch( (apiResponse) => {
          console.error( apiResponse )
        })
      }
    }

    ngOnInit() {
      // Récupérer le token au chargement du composant
      this.userToken = localStorage.getItem('MEANtoken');

      // Appeler la fonction pour vérifier le token utilisateur
      this.checkUserToken();

      // Charger la liste de todoes
      this.fetchTodoes();
    }

  }
//