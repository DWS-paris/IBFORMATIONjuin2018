/*
Imports
*/
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { UserModel } from "../../../models/user.model";
//

/*
Definition
*/
  @Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styles: []
  })
//

/*
Export
*/
  export class RegisterFormComponent implements OnInit {

    /* 
      Récupérer la valeur depuis le composant parent
      !!! ATTENTION ascynchrone !!!
    */
    @Input() formObject: UserModel;
    @Output() sendFormData = new EventEmitter();

    // Création d'un objet pour les erreurs
    public formError;

    constructor() { }

    // Création d'une fonction pour faire le reset de formError
    private resetFormError = () => {
      this.formError = {
        score: 0,
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        repeatePassword: false,
        cgu: false
      }
    }

    // Création d'une fonction pour la validation des CGU
    public checkConditions = () => {
      // Inverser la valeur de formObject
      this.formObject.cgu = ! this.formObject.cgu;

      // Vider l'erreur du span
      this.formError.cgu = false
    }

    // Création du fonction pour la soumission du formulaire
    public formSubmission = () => {
      // Reset des erreur
      this.resetFormError()

      // Tester le firstName
      if( this.formObject.firstName.length <= 1 ){
        this.formError.score ++;
        this.formError.firstName = true
      }

      // Tester le lastName
      if( this.formObject.lastName.length <= 1 ){
        this.formError.score ++;
        this.formError.lastName = true
      }

      // Tester le email
      if( this.formObject.email.length <= 1 ){
        this.formError.score ++;
        this.formError.email = true
      }

      // Tester le password
      if( this.formObject.password.length <= 4 ){
        this.formError.score ++;
        this.formError.password = true
      }

      // Tester le repeatePassword
      if( this.formObject.password != this.formObject.repeatePassword ){
        this.formError.score ++;
        this.formError.repeatePassword = true
      }

      // Tester les CGU
      if( !this.formObject.cgu ){
        this.formError.score ++;
        this.formError.cgu = true
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