import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployee: Employee = {
    id: 0,
    staffID: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
    dateOfBirth: '',
    password: '',
    message: '',
    code: '',
  };

  constructor(
    private employeeService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addEmployees() {
    this.employeeService.addEmployees(this.addEmployee).subscribe({
      next: (employee) => {
        console.log(employee);
      },
    });
    console.log(this.addEmployee);
  }
}
