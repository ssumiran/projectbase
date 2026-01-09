import { Component, inject, signal } from '@angular/core';
import { LeavetrackService } from '../../Service/leavetrack-service';
import { EmpLeaveBalanceEntity } from '../../Model/EmpLeaveBalanceEntity';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-leavebalance',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './leavebalance.html',
  styleUrl: './leavebalance.css',
})
export class Leavebalance {
  leaveSrv = inject(LeavetrackService);

  empIdSignal = signal<number>(0);
  leaveBalList = signal<EmpLeaveBalanceEntity[]>([]);

  leaveBalFormGrp = signal<FormGroup>(new FormGroup({
    balanceId: new FormControl<number>(0),
    empId: new FormControl<number>(0),
    leaveType: new FormControl<string>(''),
    count: new FormControl<number>(0),
    updatedDate: new FormControl<Date>(new Date()),
    updateBy: new FormControl<number>(0)
  }));

  showBalId = signal<boolean>(false);
  invalidMsg = signal<string>(' vv');

  constructor() { }

  ngOnInit() {
    this.getAllLeaveBalances();
  }

  getAllLeaveBalances() {
    this.invalidMsg.set('');

    this.leaveSrv.getAllBalance().subscribe({
      next: (res: any) => {
        this.leaveBalList.set(res.map((item: any) => {
          const bal = new EmpLeaveBalanceEntity();
          bal.setLBResult(item);
          return bal;
        }));
        console.log(res);
        this.clearForm();
      },
      error: (err) => {
        console.error('Error fetching leave balances:', err);
      }
    });

  }

  getBalanceByEmpId() {
    this.invalidMsg.set('');
    this.empIdSignal.set(0);
    debugger;
    if (this.empIdSignal() === 0 || this.empIdSignal() === null) {
      this.invalidMsg.set('Please enter a valid Employee ID.');
      return;
    }
    this.leaveSrv.getBalanceByEmpId(this.empIdSignal()).subscribe({
      next: (res: any) => {

        debugger;
        this.leaveBalList.set(res.map((item: any) => {
          const bal = new EmpLeaveBalanceEntity();
          bal.setLBResult(item);

          return bal;
        }));
        this.clearForm();
        console.log('Leave balance details:', res);
      },
      error: (err) => {
        console.error('Error fetching leave balance by ID:', err);
      }
    });
  }

  addLeaveBalance() {
    this.leaveBalFormGrp().value.updatedDate = new Date();
    this.leaveSrv.addLeaveBalance(this.leaveBalFormGrp().value).subscribe({
      next: (res: any) => {
        debugger;
        console.log('Leave balance created successfully:', res);
        alert('Leave balance created successfully');
        this.getAllLeaveBalances(); // Refresh the list after creation
        this.clearForm();
      },
      error: (err) => {
        console.error('Error creating leave balance:', err);
        alert('Error creating leave balance');
      }
    });
  }

  deleteLeaveBalance(balanceId: number) {
    if (!confirm('Are you sure to delete employee with ID ' + balanceId + '?')) {
      return;
    }
    this.leaveSrv.deleteBalanceById(balanceId).subscribe({
      next: (res: any) => {
        console.log('Leave balance deleted successfully:', res);
        alert('Leave balance deleted successfully');
        if (this.empIdSignal() > 0) {
          this.getBalanceByEmpId();
        } else {
          this.getAllLeaveBalances(); // Refresh the list after deletion
        }
      },
      error: (err) => {
        console.error('Error deleting leave balance:', err);
        alert('Error deleting leave balance');
      }
    });


  }

  clearForm() {
    this.leaveBalFormGrp().reset({
      balanceId: 0,
      empId: 0,
      leaveType: '',
      count: 0,
      updatedDate: new Date(),
      updateBy: 0,
      empName: '',
      contactNo: '',
      email: ''
    });
    this.showBalId.set(false);

    this.invalidMsg.set('');


  }

}