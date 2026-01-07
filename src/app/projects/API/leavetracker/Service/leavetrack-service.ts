import { HttpClient } from '@angular/common/http';
import { inject, Injectable} from '@angular/core';
import { EmpEntity } from '../Model/EmpEntity';

@Injectable({
  providedIn: 'root',
})
export class LeavetrackService {
  http = inject(HttpClient);
  constructor() {}

  

  getAllEmployee() {
    return this.http.get('https://api.freeprojectapi.com/api/LeaveTracker/getAllEmployee');
   
  }
  
  getEmployeeById(empId: number) {
    return this.http.get(`https://api.freeprojectapi.com/api/LeaveTracker/getEmployeeById?id=${empId}`);
  }   

  searchEmpById(empId: number) { debugger;
    return this.http.get(`https://api.freeprojectapi.com/api/LeaveTracker/dashboard/${empId}`);
  } 
  
  createEmployee(empData: EmpEntity) {
    return this.http.post('https://api.freeprojectapi.com/api/LeaveTracker/CreateEmployee', empData);
  }

  updateEmployee(empData: EmpEntity) {
    return this.http.put(`https://api.freeprojectapi.com/api/LeaveTracker/UpdateEmployee?id=${empData.empId}`, empData);
  }

  deleteEmployee(empId: number) {
    return this.http.delete(`https://api.freeprojectapi.com/api/LeaveTracker/DeleteEmployee?id=${empId}`);
  }
  
}
