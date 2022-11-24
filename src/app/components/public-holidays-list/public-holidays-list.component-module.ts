import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHolidaysListComponent } from './public-holidays-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  declarations: [PublicHolidaysListComponent],
  providers: [],
  exports: [PublicHolidaysListComponent],
})
export class PublicHolidaysListComponentModule {}
