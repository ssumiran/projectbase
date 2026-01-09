import { ContactEntity } from "./ContactEntity";
import { LeaveRequestEntity } from "./LeaveRequestEntity";

export class EmpLeaveRequestEntity {
    contact: ContactEntity;
    leaveRequest: LeaveRequestEntity;

    constructor() {
        this.contact = new ContactEntity();
        this.leaveRequest = new LeaveRequestEntity();
    }

    setLRResult(res: any) {
        this.contact.empName = res.empName;
        this.contact.contactNo = res.contactNo;
        this.contact.email = res.email;

        this.leaveRequest.leaveId = res.leaveId;
        this.leaveRequest.empId = res.empId;
        this.leaveRequest.leaveDate = res.leaveDate;
        this.leaveRequest.fromDate = res.fromDate;
        this.leaveRequest.toDate = res.toDate;
        this.leaveRequest.reason = res.reason;
        this.leaveRequest.leaveType = res.leaveType;

    }

    
}
