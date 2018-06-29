/*
Imports
*/
    // Angular components
    import { NgModule } from "@angular/core";
    import { ComponentRouter } from "./routes";
    import { CommonModule } from "@angular/common";

    // APP components
    import { AppFormModule } from "../../shared/form-modules/form.module";
    import { UserInterfaceModule } from "../../shared/user-interface/user-interface.module";
    import { TodoPageComponent } from "./todo-page.component";
//

/*
Definition
*/
    @NgModule({
        declarations: [ TodoPageComponent ],
        imports: [ ComponentRouter, AppFormModule, UserInterfaceModule, CommonModule ]
    })
//

/*
Export
*/
    export class TodoPageModule {};
//