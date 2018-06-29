/*
Import
*/
  import { Component } from '@angular/core';
//

/*
Definition
- La directive router-outlet permet d'afficher les composants des routes
*/
  @Component({
    selector: 'app-root',
    template: `
      <router-outlet></router-outlet>
    `
  })

/*
Export
*/
  export class AppComponent {}
//