import { Component, OnInit, signal } from '@angular/core';
import { LeavetrackService } from '../../Service/leavetrack-service';
import { EmpEntity } from '../../Model/EmpEntity';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './emp.html',
  styleUrl: './emp.css',
})
export class Emp implements OnInit {
  leaveSrv: LeavetrackService = new LeavetrackService();
  empList = signal<EmpEntity[]>([]);
  empData = signal<EmpEntity>(new EmpEntity());


  empFormGrp: FormGroup = new FormGroup({
    empId: new FormControl<number>(this.empData().empId),
    empName: new FormControl<string>(this.empData().empName),
    contactNo: new FormControl<string>(this.empData().contactNo),
    email: new FormControl<string>(this.empData().email),
    deptName: new FormControl<string>(this.empData().deptName),
    designation: new FormControl<string>(this.empData().designation),
    createdDate: new FormControl<Date>(this.empData().createdDate),
    userName: new FormControl<string>(this.empData().userName),
    password: new FormControl<string>(this.empData().password),
    sickLeaveBalance: new FormControl<number>(this.empData().sickLeaveBalance),
    paidLeaveBalance: new FormControl<number>(this.empData().paidLeaveBalance),
    role: new FormControl<string>(this.empData().role),
  }
  );

  empIdShow = signal<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    this.getAllEmployee();
  }


  getAllEmployee() {
    debugger;
    this.leaveSrv.getAllEmployee().subscribe({
      next: (data: any) => {
        debugger;
        this.empList.set(data);
      },
      error: (error: any) => {
        console.log(error.message);
      }
    }
    );
  };

  editEmployeeById(empId: number) {
    debugger;
    
    this.setShowEmpId(empId);

    this.leaveSrv.getEmployeeById(empId).subscribe({
      next: (data: any) => {
        debugger;
        this.empFormGrp.patchValue(data); 
        console.log(data);
      },
      error: (error: any) => {
        console.log(error.message);
      }
    }
    );
  };

  createEmployee() {
    debugger;
    let emp: EmpEntity = this.empFormGrp.value;
    
    this.leaveSrv.createEmployee(emp).subscribe({
      next: (data: any) => {
        debugger;
        alert('Employee created successfully');
        this.getAllEmployee();
        this.clearForm();
      },
      error: (error: any) => {
        debugger;
        alert('Error while creating employee');
        console.log(error.error.message);
      }
    }
    );
  };

  updateEmployee() {
    debugger;
    let emp: EmpEntity = this.empFormGrp.value;

    this.leaveSrv.updateEmployee(emp).subscribe({
      next: (data: any) => {
        debugger;
        alert('Employee updated successfully');
        this.getAllEmployee();
        this.clearForm();
      },
      error: (error: any) => {
        alert('Error while updating employee');
        console.log(error.message);
      }
    }
    );
  };

  deleteEmployee(empId: number) {
    debugger;
    this.clearForm();

    if (!confirm('Are you sure to delete employee with ID ' + empId + '?')) {
      return;
    }

    this.leaveSrv.deleteEmployee(empId).subscribe({
      next: (data: any) => {
        debugger;
        alert('Employee deleted successfully');
        this.getAllEmployee();
        this.clearForm();
      },
      error: (error: any) => {
        alert('Error while deleting employee');
        console.log(error.message);
      }
    }
    );
  };

  setShowEmpId(empId: number) {
    let value = empId > 0 ? true : false;
    this.empIdShow.set(value);
  }

  clearForm() {
    this.empFormGrp.reset();
    this.setShowEmpId(0);
  }
}