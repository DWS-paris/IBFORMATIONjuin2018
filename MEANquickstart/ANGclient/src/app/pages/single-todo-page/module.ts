/*
Imports
*/
    // Angular components
    import { NgModule } from "@angular/core";

    // APP components
    import { ComponentRouter } from "./routes";
    import { UserInterfaceModule } from "../../shared/user-interface/user-interface.module";
    import { SingleTodoPageComponent } from "./single-todo-page.component";
//

/*
Definition
*/
    @NgModule({
        declarations: [ SingleTodoPageComponent ],
        imports: [ ComponentRouter, UserInterfaceModule ]
    })
//

/*
Export
*/
    export class SingleTodoPageModule {};
//