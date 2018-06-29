/*
Imports
*/
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { UserModel } from "../../../models/user.model";
//

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: []
})
export class LoginFormComponent implements OnInit {

  /* 
    Récupérer la valeur depuis le composant parent
    !!! ATTENTION ascynchrone !!!
  */
  @Input() formObject: UserModel;
  @Output() sendFormData = new EventEmitter();

  // Création d'un objet pour les erreurs
  public formError;

  // Création d'une variabble pour masquer/afficher le fomulaire
  public formIsOpen: Boolean = true;

  constructor() { }

  // Création d'une fonction pour faire le reset de formError
  private resetFormError = () => {
    this.formError = {
      score: 0,
      email: false,
      password: false,
    }
  }

  // Création du fonction pour la soumission du formulaire
  public formSubmission = () => {
    // Reset des erreur
    this.resetFormError()

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
