import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  eachEmployee: Employee = {
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

  currentDate = new Date();

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id: any = params.get('id');

        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              this.router.navigate([`employee-dashboard/${response.id}`]);
              this.eachEmployee = response;
            },
          });
        }
      },
    });
  }

  getEmployee(id: any) {
    this.employeeService.getEmployee(id).subscribe({
      next: (eachEmployee) => {
        this.router.navigate([`employee-dashboard/${eachEmployee.id}`]);
        console.log(eachEmployee);
      },
    });
    console.log(this.eachEmployee);
  }
}
