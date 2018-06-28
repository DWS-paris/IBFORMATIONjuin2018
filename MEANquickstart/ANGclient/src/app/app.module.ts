/*
Import
*/
  // Globaux
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { HttpClientModule } from '@angular/common/http';

  // Internes
  import { AppRouter } from "./app.router"; // AppRouter est un module
  import { AppComponent } from './app.component';
  import { MyHeaderComponent } from './partials/my-header/my-header.component'; 
//

/*
Definition
*/
  @NgModule({
    declarations: [
      AppComponent,
      MyHeaderComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      AppRouter
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
//

/*
Export
*/
  export class AppModule { }
//