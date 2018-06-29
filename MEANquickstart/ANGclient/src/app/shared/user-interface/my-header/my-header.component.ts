/*
Imports
*/
  import { Component, OnInit, Input } from '@angular/core';
  import { Router } from "@angular/router";
//

/*
Definition
*/
  @Component({
    selector: 'app-my-header',
    templateUrl: './my-header.component.html',
    styles: [`
      ul{ display: flex; list-style: none; }
      li:not(:last-child){ margin-right: 1rem; }
    `]
  })
//

/*
Export
*/
  export class MyHeaderComponent implements OnInit {

    // Variables
    @Input() path: string;

    constructor(
      private router: Router
    ) { }

    // Création d'une fonction pour déconnecter l'utilisateur
    public logoutUser = () => {
      // Supprimer le token
      localStorage.removeItem('MEANtoken');

      // Rediriger l'utilisateur vers la home page
      this.router.navigateByUrl('/');
    }

    ngOnInit() {}
  }
//