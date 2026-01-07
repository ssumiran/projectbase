import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Emp } from './Pages/emp/emp';

@Component({
  selector: 'app-leavetracker',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './leavetracker.html',
  styleUrl: './leavetracker.css',
})
export class Leavetracker implements OnInit {
  routeToPage = inject(Router);


  constructor() { }

  ngOnInit(): void { debugger; 
    this.navigateToDashboard();
  }

  navigateToEmployees() {
    this.routeToPage.navigate(['/Projects/LeaveTracker/Employees']);
  }

  navigateToDashboard() {
    this.routeToPage.navigate(['/Projects/LeaveTracker/Dashboard']);
  }
}
