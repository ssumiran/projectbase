import { Routes } from "@angular/router";

export const projectsRoutes: Routes = [
    { path: 'LeaveTracker', loadComponent: () => import('./API/leavetracker/leavetracker').then(m => m.Leavetracker),
       loadChildren: () => import('./API/leavetracker/LeaveTracker.routes').then(m => m.LeaveTrackerRoutes) 
    },

    { path: 'FindVowels', loadComponent: () => import('./JavaString/vowelsfinder/vowelsfinder').then(m => m.Vowelsfinder)},
    { path: 'Convertor', loadComponent: () => import('./convertor/convertor').then(m => m.Convertor)},
    { path: 'BasicMath', loadComponent: () => import('./simplemath/simplemath').then(m => m.Simplemath)}
];