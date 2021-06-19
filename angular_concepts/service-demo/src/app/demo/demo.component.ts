import { Component, OnInit } from '@angular/core';
import { BaseService } from '../service/base.service';
import { Employee } from '../Employee.module';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  list: Employee[] = [];
  emp: Employee;

  constructor(private base: BaseService) { }

  ngOnInit() {
    this.list = this.base.getAllEmployees();
  }



  getEmployeeById(id: number) {
    console.log(id);

    this.emp = this.base.getEmployeeById(id);
  }
}
