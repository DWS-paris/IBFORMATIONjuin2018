/*
Imports
*/
    import { NgModule } from "@angular/core";
    import { ComponentRouter } from "./routes";
    import { AppFormModule } from "../../shared/form-modules/form.module";
    import { TodoPageComponent } from "./todo-page.component";
//

/*
Definition
*/
    @NgModule({
        declarations: [ TodoPageComponent ],
        imports: [ ComponentRouter, AppFormModule ]
    })
//

/*
Export
*/
    export class TodoPageModule {};
//