import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../models/employee.model';
import { MasterEmployeeModel } from '../models/master-employee.model';
import { ApiResponse } from '../models/api-response.model';
import { EmployeeResponse } from '../models/employee-response.model';

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

interface RemoveEmployeeResponse {
  status: string;
  message: string;
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
              id: employee.id,
              name: employee.employee_name,
              salary: employee.employee_salary,
              age: employee.employee_age,
            };
          })
        )
      );
  }

  delete(id: string): Observable<RemoveEmployeeResponse> {
    return this._httpClient.delete<RemoveEmployeeResponse>(
      'https://dummy.restapiexample.com/api/v1/delete/' + id
    );
  }

  getOne(id: string): Observable<MasterEmployeeModel> {
    return this._httpClient
      .get<ApiResponse<EmployeeResponse>>(
        'https://dummy.restapiexample.com/api/v1/employee/' + id
      )
      .pipe(
        map((response: ApiResponse<EmployeeResponse>) => {
          return {
            name: response.data.employee_name,
            id: response.data.id,
            salary: response.data.employee_salary,
            age: response.data.employee_age,
            image: response.data.profile_image,
          };
        })
      );
  }
}
