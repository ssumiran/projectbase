import { ContactEntity } from "./ContactEntity";
import { LeaveBalanceEntity } from "./LeaveBalanceEntity";

export class EmpLeaveBalanceEntity {
    contact: ContactEntity;
    leaveBalance: LeaveBalanceEntity;

    constructor() {
        this.contact = new ContactEntity();
        this.leaveBalance = new LeaveBalanceEntity();
    }

    setLBResult(res: any) {
        this.contact.empName = res.empName;
        this.contact.contactNo = res.contactNo;
        this.contact.email = res.email;

        this.leaveBalance.balanceId = res.balanceId;
        this.leaveBalance.empId = res.empId;
        this.leaveBalance.leaveType = res.leaveType;
        this.leaveBalance.count = res.count;
        this.leaveBalance.updatedDate = res.updatedDate;
        this.leaveBalance.updateBy = res.updateBy;
    }
}