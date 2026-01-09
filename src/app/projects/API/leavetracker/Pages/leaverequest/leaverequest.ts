import { Component, inject, OnInit, signal } from '@angular/core';
import { EmpLeaveRequestEntity } from '../../Model/EmpLeaveRequestEntity';
import { LeavetrackService } from '../../Service/leavetrack-service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';

@Component({
  selector: 'app-leaverequest',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './leaverequest.html',
  styleUrl: './leaverequest.css',
})
export class Leaverequest implements OnInit {
  leaveSrv = inject(LeavetrackService);
                                               
  leaveReqList = signal<EmpLeaveRequestEntity[]>([]);

//leaveReqData = signal<EmpLeaveRequestEntity>(new EmpLeaveRequestEntity());
leaveReqFormGrp: FormGroup = new FormGroup({
    
    leaveId: new FormControl<number>(0),
    empId: new FormControl<number>(0),
    leaveDate: new FormControl<Date>(new Date()),
    fromDate: new FormControl<Date>(new Date()),
    toDate: new FormControl<Date>(new Date()),
    reason: new FormControl<string>(''),
    leaveType: new FormControl<string>('')
  }
  );


constructor() { }

  ngOnInit(): void {
    this.getLeaveRequests();
  }

  getLeaveRequests() {
    this.leaveSrv.getAllLeaveRequests().subscribe({
      next: (res: any) => {
        this.leaveReqList.set(res.map((item: any) => {
          const leave = new EmpLeaveRequestEntity();
          leave.setLRResult(item);
          return leave;
        }));
      },
      error(err: any) {
        console.log('Error while fetching leave requests:', err);
      }
    });
  }

  createLeaveRequest() {
    this.leaveReqFormGrp.value.fromDate = formatDate(this.leaveReqFormGrp.value.fromDate, 'yyyy-MM-dd', 'en-US');
    this.leaveReqFormGrp.value.toDate = formatDate(this.leaveReqFormGrp.value.toDate, 'yyyy-MM-dd', 'en-US');
    this.leaveReqFormGrp.value.leaveDate = formatDate(this.leaveReqFormGrp.value.leaveDate, 'yyyy-MM-dd', 'en-US');

    this.leaveSrv.createLeaveRequest(this.leaveReqFormGrp.value).subscribe({
      next: (res: any) => {
        console.log('Leave request created successfully:', res);    
        this.getLeaveRequests(); // Refresh the list after creation
        this.resetForm(); // Reset the form after successful creation
      },
      error(err: any) {
        console.log('Error while creating leave request:', err);
      }   
    });
  } 
  

  resetForm() {
    this.leaveReqFormGrp.reset({
      leaveId: 0,
      empId: 0,
      leaveDate: new Date(),
      fromDate: new Date(),
      toDate: new Date(),
      reason: '',
      leaveType: ''
    });
  }
}
