/*
Imports
*/
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { TodoModel } from "../../../models/todo.model";
//

/*
Definition
*/
  @Component({
    selector: 'app-todo-from',
    templateUrl: './todo-from.component.html',
    styles: []
  })
//


/*
Export
*/
  export class TodoFromComponent implements OnInit {

    /* 
    Récupérer la valeur depuis le composant parent
    !!! ATTENTION ascynchrone !!!
  */
  @Input() formObject: TodoModel;
  @Output() sendFormData = new EventEmitter();

  // Création d'un objet pour les erreurs
  public formError;

  constructor() { }

  // Création d'une fonction pour faire le reset de formError
  private resetFormError = () => {
    this.formError = {
      score: 0,
      content: false,
    }
  }

  // Création du fonction pour la soumission du formulaire
  public formSubmission = () => {
    // Reset des erreur
    this.resetFormError()

    // Tester le content
    if( this.formObject.content.length === 0 ){
      this.formError.score ++;
      this.formError.email = true
    }

    /*
    Validation finale du formulaire
    */
      this.formError.score === 0 ? this.sendFormData.emit( this.formObject ) : null;
    //

  }

  // Fonction lancée à la fin du chargement du composant
  ngOnInit() {
    // Reset des erreur
    this.resetFormError()
  }

  }
//