/*
Import
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from "@angular/router";

    import { TodoPageComponent } from "./todo-page.component";
//

/*
Definition
*/
    const routes: Routes = [
        {
            path: '',
            component: TodoPageComponent
        }
    ]
//

/*
Export
*/
    export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(routes)
//