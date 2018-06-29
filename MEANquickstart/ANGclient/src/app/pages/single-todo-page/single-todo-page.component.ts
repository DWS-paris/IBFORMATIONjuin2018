/*
Import
*/
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from "@angular/router";
//

/*
Definition
*/
  @Component({
    selector: 'app-single-todo-page',
    templateUrl: './single-todo-page.component.html',
    styles: []
  })
//

/*
Export
*/
  export class SingleTodoPageComponent implements OnInit {

    private todoId: String;

    constructor( private activatedRoute: ActivatedRoute ) { }

    // Création d'une fonction pour récupérer le paramètre de la route
    private getRouteParams = () => {
      this.todoId =  this.activatedRoute.snapshot.params['id'];

      console.log(this.todoId);
    }

    ngOnInit() {
      // Récupérer le paramètre de la route au chargement du composant
      this.getRouteParams();
    }

  }
//