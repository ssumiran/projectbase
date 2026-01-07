import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeavetrackService } from '../../Service/leavetrack-service';
import { EmpEntity } from '../../Model/EmpEntity';
import { EmpLeaveEntity } from '../../Model/EmpLeaveEntity';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  empId: string = '';
  empLeaveObj = signal<EmpLeaveEntity>(new EmpLeaveEntity());
  leaveTrackSrv: LeavetrackService = new LeavetrackService();
  isIdEmpty = signal<boolean>(false);

  constructor() { }

  searchEmpById(empId: string) {
    debugger;
    if (empId === null || empId.trim() === '') {
      this.isIdEmpty.set(true);
    } else {
      const eId: number = Number(empId);
      this.leaveTrackSrv.searchEmpById(eId).subscribe({
        next: (data: any) => {
          debugger;
          this.empLeaveObj.set(data);
        },
        error: (error: any) => {
          console.log(error.message);
        }
      });
      this.clearForm();
    }
  }

  clearForm() {
    this.empId = '';
    this.isIdEmpty.set(false);
    //this.empObj = new EmpEntity();
  }
}
