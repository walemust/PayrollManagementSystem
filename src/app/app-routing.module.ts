import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  // },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'employees',
    component: EmployeesListComponent,
  },
  {
    path: 'employees/add',
    component: EmployeesListComponent,
  },
  {
    path: 'employees/edit/:id',
    component: EmployeesListComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'employee-dashboard',
    component: EmployeeDashboardComponent,
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'salary',
    component: SalaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
