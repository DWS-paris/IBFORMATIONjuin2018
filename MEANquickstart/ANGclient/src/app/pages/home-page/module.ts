/*
Imports
*/
    // Angular components
    import { NgModule } from "@angular/core";
    import { ComponentRouter } from "./routes";

    // APP components
    import { AppFormModule } from "../../shared/form-modules/form.module";
    import { UserInterfaceModule } from "../../shared/user-interface/user-interface.module";
    import { HomePageComponent } from "./home-page.component";
//

/*
Definition
*/
    @NgModule({
        declarations: [ HomePageComponent ],
        
        // Les modules sont à renseigner dans le tableau des imports
        imports: [ ComponentRouter, AppFormModule, UserInterfaceModule ]
    })
//

/*
Export
*/
    export class HomePageModule {};
//