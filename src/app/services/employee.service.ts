import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

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
    return this._httpClient.get<EmployeeModel[]>(
      'https://dummy.restapiexample.com/api/v1/employees'
    );
  }
}
