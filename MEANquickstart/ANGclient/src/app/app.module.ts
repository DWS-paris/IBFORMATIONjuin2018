/*
Import
*/
  // Globaux
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { HttpClientModule } from '@angular/common/http';

  // Internes
  import { AppRouterModule } from "./app.router";
  import { AppComponent } from './app.component';
//

/*
Definition
*/
  @NgModule({
    declarations: [
      AppComponent,
    ],

    // Les modules sont à renseigner dans le tableau des imports
    imports: [
      BrowserModule,
      HttpClientModule,
      AppRouterModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ]
  })
//

/*
Export
*/
  export class AppModule { }
//