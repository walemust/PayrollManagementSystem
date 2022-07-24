import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllEmployees2(): Observable<Employee[]> {
    console.log('about to make request');
    const response = this.http.get<Employee[]>(
      'https://localhost:7130/api/employees'
    );
    console.log(response);
    return response;
  }
  getAllEmployees(): Observable<Employee[]> {
    console.log('about to make request');
    return this.http
      .get<Employee[]>('https://localhost:7130/api/employees')
      .pipe(
        map((data) => {
          return data;
        }),
        tap((res) => console.log(JSON.stringify(res)))
      );
  }

  addEmployees(addEmployee: Employee): Observable<Employee> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    //     'Access-Control-Allow-Headers': 'application/json',

    //     //'HTTP/1.1': '200 OK',
    //   }),
    // };
    addEmployee.id = '00000000-0000-0000-0000-000000000000';
    return this.http
      .post<Employee>(
        'https://cors-anywhere.herokuapp.com/https://localhost:7130/api/employees/',
        addEmployee
      )
      .pipe(
        map((data) => {
          return data;
        }),
        tap((res) => console.log(JSON.stringify(res))),
        catchError(this.handleError)
      );
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http
      .get<Employee>(
        'https://cors-anywhere.herokuapp.com/https://localhost:7130/api/employees' +
          id
      )
      .pipe(
        map((data) => {
          return data;
        }),
        tap((res) => console.log(JSON.stringify(res))),
        catchError(this.handleError)
      );
  }

  updateEmployee(
    id: string,
    updateEmployeeRequest: Employee
  ): Observable<Employee> {
    return this.http
      .put<Employee>(
        'https://cors-anywhere.herokuapp.com/https://localhost:7130/api/employees' +
          id,
        updateEmployeeRequest
      )
      .pipe(
        map((data) => {
          return data;
        }),
        tap((res) => console.log(JSON.stringify(res))),
        catchError(this.handleError)
      );
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http
      .delete<Employee>(
        'https://cors-anywhere.herokuapp.com/https://localhost:7130/api/employees' +
          id
      )
      .pipe(
        map((data) => {
          return data;
        }),
        tap((res) => console.log(JSON.stringify(res))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Wale, An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
