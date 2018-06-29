/*
Imports
*/
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { FormsModule } from '@angular/forms';
    import { RegisterFormComponent } from "./register-form/register-form.component";
    import { LoginFormComponent } from "./login-form/login-form.component";
    import { TodoFromComponent } from "./todo-from/todo-from.component";
//

/*
Definition
*/
    @NgModule({
        declarations: [ RegisterFormComponent, LoginFormComponent, TodoFromComponent ],
        imports: [ CommonModule, FormsModule ],
        exports: [ RegisterFormComponent, LoginFormComponent, TodoFromComponent ]
    })
//

/*
Export
*/
    export class AppFormModule {};
//