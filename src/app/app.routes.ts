import { Routes } from '@angular/router';
import { Aboutme } from './aboutme/aboutme';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    //Anger loading the component directly
    { path: 'Home', component:  Home },
    //using loadComponent for lazy loading
    {
        path: 'Projects', loadComponent: () => import('./projects/projects').then(m => m.Projects),
        loadChildren: () => import('./projects/projects.routes').then(m => m.projectsRoutes)
    },

    //using loadComponent for lazy loading
    { path: 'Skills', loadComponent: () => import('./skills/skills').then(m => m.Skills) },
    { path: 'Contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) },
    { path: 'About', loadComponent: () => import('./aboutme/aboutme').then(m => m.Aboutme) },
    //Miscellaneous Section
    {
        path: 'Miscellaneous', loadComponent: () => import('./miscellaneous/miscellaneous').then(m => m.Miscellaneous),
        loadChildren: () => import('./miscellaneous/misc.routes').then(m => m.miscRoutes)
    },
    //End of Miscellaneous Section

    //Angular tutorial Page.
    { path: 'Home', loadComponent: () => import('./zAngulartut/home/home').then(m => m.Home) },

    //End of Angular tutorial Page.


    { path: 'PageNotFound', loadComponent: () => import('./pagenotfound/pagenotfound').then(m => m.Pagenotfound) },
    // this path wildcard "**"  MUST BE LAST path array
    { path: "**", redirectTo: 'PageNotFound' }
];
