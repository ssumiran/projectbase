import { Routes } from '@angular/router';

export const miscRoutes: Routes = [
    { path: 'music', loadComponent: () => import('./music/music').then(m => m.Music)},
    { path: 'CarriRichardson', loadComponent: () => import('./carririchardson/carririchardson').then(c => c.Carririchardson)},
];