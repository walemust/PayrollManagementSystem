import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  //Get all employees
  employees: Employee[] = [];

  //Add employee
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
    status: 0,
  };

  //Edit employee
  employeeDetails: Employee = {
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

  name: any;
  staffid: any;

  constructor(
    private employeesService: EmployeesService,
    private employeeService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router //private form: FormBuilder
  ) {}

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.route.paramMap.subscribe({
      next: (params) => {
        const id: any = params.get('id');

        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response;
            },
          });
        }
      },
    });
  }

  editEmployee(id: any) {
    {
      this.employeeService.getEmployee(id).subscribe({
        next: (response) => {
          this.employeeDetails = response;
          console.log('yppppp');
        },
      });
    }
  }

  addEmployees() {
    this.employeeService.addEmployees(this.addEmployee).subscribe({
      next: (employee) => {
        console.log(employee);
      },
    });
    console.log(this.addEmployee);
  }

  updateEmployee() {
    this.employeeService

      .updateEmployee(this.employeeDetails.id, this.employeeDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['employees']);
        },
      });
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      },
    });
  }

  Search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.employees = this.employees.filter((res) => {
        return res.name.toLocaleLowerCase().match(this.name);
      });
    }
  }

  SearchId() {
    if (this.staffid == '') {
      this.ngOnInit();
    } else {
      this.employees = this.employees.filter((res) => {
        return res.staffID.toLocaleLowerCase().match(this.staffid);
      });
    }
  }
}
