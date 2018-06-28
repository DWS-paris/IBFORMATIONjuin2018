/*
Imports
*/
  import { Component, OnInit } from '@angular/core';
  import { UserModel } from "../../models/user.model";
//

/*
Definitino
*/
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styles: []
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

    constructor() { }

    // Création d'une fonction pour inscrire un utilisateur
    public registerNewUser = ( user: UserModel ) => {
      console.log(`Validated form HOME`, user);
    };

    ngOnInit() {
    }

  }
//