/*
Imports
*/
    import { NgModule } from "@angular/core";
    import { ComponentRouter } from "./routes";
    import { AppFormModule } from "../../shared/form-modules/form.module";
    import { HomePageComponent } from "./home-page.component";
//

/*
Definition
*/
    @NgModule({
        declarations: [ HomePageComponent ],
        imports: [ ComponentRouter, AppFormModule ]
    })
//

/*
Export
*/
    export class HomePageModule {};
//