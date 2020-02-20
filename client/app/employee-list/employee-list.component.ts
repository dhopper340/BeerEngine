import { EmployeeListService, Employee, EmployeeResolved } from './services/employee-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { MDCTextField } from '@material/textfield';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  errorMessage: string;

  constructor(public readonly service: EmployeeListService, private route: ActivatedRoute) { }

  ngOnInit() {
    // TODO: This is used to enable default material control
    // const username = new MDCTextField(document.querySelector('.name'));
    this.getEmployees();
  }

  getEmployees() {
    const resolvedData: EmployeeResolved = this.route.snapshot.data.employees;
    this.errorMessage = resolvedData.error;
    this.employees = resolvedData.employees;
  }
}
