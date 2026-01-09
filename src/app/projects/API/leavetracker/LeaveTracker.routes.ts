import { Routes } from "@angular/router";
import { Emp } from "./Pages/emp/emp";
import { Dashboard } from "./Pages/dashboard/dashboard";

export const LeaveTrackerRoutes: Routes = [ 
    //Angular loading the component directly
    {path: 'Dashboard', component: Dashboard},
    {path: 'Employees', 
        loadComponent: () => import('./Pages/emp/emp').then(c => c.Emp)},
    {path: 'LeaveBalance', 
        loadComponent: () => import('./Pages/leavebalance/leavebalance').then(c => c.Leavebalance)},
    { path: 'LeaveRequest', 
        loadComponent: () => import('./Pages/leaverequest/leaverequest').then(c => c.Leaverequest)    }
];