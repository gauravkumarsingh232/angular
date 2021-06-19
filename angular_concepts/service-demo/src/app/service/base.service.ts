import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Employee.module';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  employees: Employee[] = [
    new Employee(1,'Jhon','jhon.coner@awesomemail.com'),
    new Employee(2,'Steve','steve.rogers@firstavenger.com'),
    new Employee(3,'Tony','tony.stark@ironmaninc.com')
  ];
  constructor(private http:HttpClient) { }

  getAllEmployees(): Array<Employee>{
    return this.employees;
  }

  getEmployeeById(id: number): Employee {
    for(let i=0; i < this.employees.length; i++){
      if(this.employees[i]['id'] === id)
        return this.employees[i];
    }
    return null;
  }
}
