import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  Register: Employee = {
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
    status: 0,
  };
  constructor(
    private employeeService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  RegisterEmployee() {
    this.employeeService.RegisterEmployee(this.Register).subscribe({
      next: (Register) => {
        this.router.navigate(['login']);
        console.log(Register);
      },
    });
    console.log(this.Register);
  }
}
