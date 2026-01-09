

export class LeaveBalanceEntity {
    balanceId: number;
    empId: number;    
    leaveType: string;
    count: number;
    updatedDate: string;
    updateBy: number;

    constructor() {
        this.balanceId = 0;
        this.empId = 0;
        this.leaveType = '';
        this.count = 0;
        this.updatedDate = '';
        this.updateBy = 0;
    }
}