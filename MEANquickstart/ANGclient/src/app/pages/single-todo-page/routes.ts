/*
Import
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from "@angular/router";

    import { SingleTodoPageComponent } from "./single-todo-page.component";
//

/*
Definition
*/
    const routes: Routes = [
        {
            path: '',
            component: SingleTodoPageComponent
        }
    ]
//

/*
Export
*/
    export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(routes)
//