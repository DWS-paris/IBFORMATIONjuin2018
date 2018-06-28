/*
Imports
*/
  import { Component, OnInit } from '@angular/core';
  import { UserModel } from "../../models/user.model";
  import { AuthService } from "../../services/auth/auth.service";
//

/*
Definitino
*/
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',

    // Les services sont à ajouter dasn le tyableau des providers
    providers: [ AuthService ]
  })
//

/*
Export
*/
  export class HomePageComponent implements OnInit {

    /*
    Variables
    */
      public registerObject: UserModel = {
        firstName: ``,
        lastName: ``,
        email: ``,
        password: ``,
        repeatePassword: ``,
        cgu: false
      }
    //

    // Injection AuthService dans la class
    constructor(
      private authService: AuthService
    ) { }

    // Création d'une fonction pour inscrire un utilisateur
    public registerNewUser = ( user: UserModel ) => {
      console.log(`Validated form HOME`, user);

      // Contacter le service pour inscrire l'utilisateur
      this.authService.userRegister(user)
      .then( apiSuccess => console.log(apiSuccess) )
      .catch( apiError => console.error(apiError) )

    };

    ngOnInit() {
    }

  }
//