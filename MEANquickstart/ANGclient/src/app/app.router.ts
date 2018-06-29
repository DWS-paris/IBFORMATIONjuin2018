/*
Import
*/
    import { ModuleWithProviders } from '@angular/core';
    import { Routes, RouterModule } from "@angular/router";
//

/*
Définir les routes dans un tableau de Routes
*/
    const mainRoutes: Routes = [
        // Une route est définie par un objet
        {
            path: '',
            loadChildren: './pages/home-page/module#HomePageModule' // Lazy Load
        },
        {
            path: 'todo',
            loadChildren: './pages/todo-page/module#TodoPageModule' // Lazy Load
        }
    ];
//

/*
Export
*/
    export const AppRouter: ModuleWithProviders = RouterModule.forRoot(mainRoutes);
//