import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { MasterEmployeeModel } from '../../models/master-employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-master-details',
  templateUrl: './employee-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeMasterDetailsComponent {
  readonly employeesList$: Observable<EmployeeModel[]> =
    this._employeeService.getAll();
  private _selectedEmployeeIdSubject: Subject<string> = new Subject<string>();
  public selectedEmployeeId$: Observable<string> =
    this._selectedEmployeeIdSubject.asObservable();
  readonly details$: Observable<MasterEmployeeModel> =
    this.selectedEmployeeId$.pipe(
      switchMap((id) => this._employeeService.getOne(id))
    );

  constructor(private _employeeService: EmployeeService) {}

  selectEmployee(id: string): void {
    this._selectedEmployeeIdSubject.next(id);
  }
}
