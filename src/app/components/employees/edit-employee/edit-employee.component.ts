import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  //employeeValues!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private router: Router //private form: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.employeeValues = this.form.group({
    //   name: '',
    //   email: '',
    //   phone: 0,
    //   salary: 0,
    //   department: '',
    // });
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

  updateEmployee() {
    this.employeeService

      .updateEmployee(this.employeeDetails.id, this.employeeDetails)
      .subscribe({
        next: (_response) => {
          this.router.navigate(['employees']);
        },
      });
  }

  // async Updateemployees() {
  //   var employeeupdate = await this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
  // }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (_response) => {
        this.router.navigate(['employees']);
      },
    });
  }
}
