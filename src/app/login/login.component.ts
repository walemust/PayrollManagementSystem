import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  SignIn: Employee = {
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

  SignInEmployee() {
    setTimeout(() => {
      console.log(this.SignIn);
      this.employeeService.SignInEmployee(this.SignIn).subscribe({
        next: (response) => {
          //swag
          if (response.code == '00') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: response.message,
              showConfirmButton: false,
              timer: 1200,
            });
            this.router.navigate([`employee-dashboard/${response.id}`]);
            this.router.navigate([`profile/${response.id}`]);
          } else if (response.code == '02') {
            Swal.fire({
              icon: 'warning',
              title: 'Warning',
              text: response.message,
              // footer: '<a href="">Why do I have this issue?</a>',
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'error',
              text: response.message,
              // footer: '<a href="">Why do I have this issue?</a>',
            });
          }
        },
      });
    }, 1500);
  }

  // this.alert=true
}
