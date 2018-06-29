/*
Imports
*/
    // Angular components
    import { NgModule } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { RouterModule } from "@angular/router";

    // APP components
    import { MyHeaderComponent } from "./my-header/my-header.component";
    import { TodoItemComponent } from "./todo-item/todo-item.component";
//

/*
Definition
*/
    @NgModule({
        declarations: [ MyHeaderComponent, TodoItemComponent ],
        imports: [ CommonModule, RouterModule ],
        exports: [ MyHeaderComponent, TodoItemComponent ]
    })
//

/*
Export
*/
    export class UserInterfaceModule {};
//