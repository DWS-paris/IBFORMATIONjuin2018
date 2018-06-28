/*
Imports
*/
  import { Component } from '@angular/core';
//

/*
Définition
*/
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
//

/*
Export
*/
  export class AppComponent {
    
    public title: String = `app`;
    public search: String = ``;
    public labelTitle: String = `Moteur de recherche`;

    constructor(){}

    public sayHello = ( userName: String ): String => {
      return this.title = `Bonjour ${userName}`
    }

    public getDataEvent = ( value: String ) => {
      console.log(`Composant principal : ${value}`)
    }

  }
//