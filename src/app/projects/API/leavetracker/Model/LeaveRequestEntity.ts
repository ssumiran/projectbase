
export class LeaveRequestEntity {
    leaveId: number;
    empId: number;
    leaveDate: Date;
    fromDate: Date;
    toDate: Date;
    reason: string;
    leaveType: string;

    constructor() {
        this.leaveId = 0;
        this.empId = 0;
        this.leaveDate = new Date();
        this.fromDate = new Date();
        this.toDate = new Date();
        this.reason = '';
        this.leaveType = '';
    }
}