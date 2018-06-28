/*
Import
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from "@angular/router";

    import { HomePageComponent } from "./home-page.component";
//

/*
Definition
*/
    const routes: Routes = [
        {
            path: '',
            component: HomePageComponent
        }
    ]
//

/*
Export
*/
    export const ComponentRouter: ModuleWithProviders = RouterModule.forChild(routes)
//