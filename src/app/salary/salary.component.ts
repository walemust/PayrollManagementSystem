import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css'],
})
export class SalaryComponent implements OnInit {
  employees: Employee[] = [];

  name: any;

  searchText: any;
  p: number = 1;
  collection!: any[];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;

        //let ddd == this.data.filter(p => p.bankName == val)
      },
      error: (response) => {
        console.log(response);
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
}
