import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

interface DummyEmployee {
  status: string;
  data: {
    id: string;
    employee_name: string;
    employee_salary: string;
    employee_age: string;
    profile_image: string;
  }[];
}

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  create(employee: Omit<EmployeeModel, 'id'>): Observable<EmployeeModel> {
    return this._httpClient.post<EmployeeModel>(
      'https://dummy.restapiexample.com/create',
      employee
    );
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient
      .get<DummyEmployee>('https://dummy.restapiexample.com//api/v1/employees')
      .pipe(
        map((dummy: DummyEmployee) =>
          dummy.data.map((employee) => {
            return {
              name: employee.employee_name,
              salary: employee.employee_salary,
              age: employee.employee_age,
            };
          })
        )
      );
  }
}
