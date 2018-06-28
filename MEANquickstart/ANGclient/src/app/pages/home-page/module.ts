/*
Imports
*/
    import { NgModule } from "@angular/core";
    import { ComponentRouter } from "./routes";
    import { HomePageComponent } from "./home-page.component";
//

/*
Definition
*/
    @NgModule({
        declarations: [ HomePageComponent ],
        imports: [ ComponentRouter ]
    })
//

/*
Export
*/
    export class HomePageModule {};
//