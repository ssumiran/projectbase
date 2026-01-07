import { AvaiTaken } from "./AvaiTaken";
import { TotalAvaiTaken } from "./TotalAvaiTaken";

export class LeaveSummary{
  paidLeave: AvaiTaken;
        sickLeave: AvaiTaken;
        total: TotalAvaiTaken;

    constructor() { 
        this.paidLeave = new AvaiTaken();
        this.sickLeave = new AvaiTaken();
        this.total = new TotalAvaiTaken();
    }
}