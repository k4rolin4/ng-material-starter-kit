import { NgModule } from '@angular/core';
import { EmployeeMasterDetailsComponent } from './employee-master-details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, NgForOf } from '@angular/common';

@NgModule({
  imports: [
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    NgForOf,
    AsyncPipe,
  ],
  declarations: [EmployeeMasterDetailsComponent],
  providers: [],
  exports: [EmployeeMasterDetailsComponent],
})
export class EmployeeMasterDetailsComponentModule {}
