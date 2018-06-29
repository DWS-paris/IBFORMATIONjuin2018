/*
Imports
*/
  // Angular compoenents
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";

  // APP components
  import { UserModel } from "../../models/user.model";
  import { AuthService } from "../../services/auth/auth.service";
  import { UserService } from "../../services/user/user.service";
//

/*
Definitino
*/
  @Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',

    // Les services sont à ajouter dasn le tableau des providers
    providers: [ AuthService, UserService ]
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

      public loginObject: UserModel = {
        email: ``,
        password: ``,
      }

      private userToken: String;
    //

    // Injection des services et du router
    constructor(
      private authService: AuthService,
      private userService: UserService,
      private router: Router
    ) { }

    // Création d'une fonction pour inscrire un utilisateur
    public registerNewUser = ( user: UserModel ) => {
      console.log(`Validated form HOME`, user);

      // Contacter le service pour inscrire l'utilisateur
      this.authService.userRegister(user)
      .then( apiSuccess => console.log(apiSuccess) )
      .catch( apiError => console.error(apiError) )

    };

    // Création d'une fonction pour connecter un utilisateur
    public loginUser = ( user: UserModel ) => {
      // Contacter le service pour inscrire l'utilisateur
      this.authService.userLogin(user)
      .then( apiSuccess => {
        console.log(apiSuccess)

        // Stocker le token utilisateur dans le navigateur
        localStorage.setItem('MEANtoken', apiSuccess.data.token);

        // Rediriger l'utilisateur vers la page todo
        this.router.navigateByUrl('/todo');
      })
      .catch( apiError => console.error(apiError) )
    };

    // Création d'une fonction pour connecter automatiquement l'utilisateur avec son token
    private checkUserToken = () => {
      if(this.userToken != undefined){
        // Contacter le service pour inscrire l'utilisateur
        this.userService.getUserInfos(this.userToken)
        .then( () => {
          // Rediriger l'utilisateur vers la page todo
          this.router.navigateByUrl('/todo');
        })
        .catch( apiError => console.error(apiError) )
      }
    }

    ngOnInit() {
      // Récupérer le token au chargement du composant
      this.userToken = localStorage.getItem('MEANtoken');

      // Appeler la fonction pour vérifier le token utilisateur
      this.checkUserToken();
    }

  }
//