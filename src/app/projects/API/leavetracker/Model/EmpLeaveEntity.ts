import { LeaveSummary } from "./LeaveSummary";

export class EmpLeaveEntity {
    empId: number;
    empName: string;
    department: string;
    designation: string;
    leaveSummary: LeaveSummary;

    constructor() {
        this.empId = 0;
        this.empName = '';
        this.department = '';
        this.designation = '';
        this.leaveSummary = new LeaveSummary();
    }
}