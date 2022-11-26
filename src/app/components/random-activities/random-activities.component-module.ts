import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RandomActivitiesComponent } from './random-activities.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [RandomActivitiesComponent],
  providers: [],
  exports: [RandomActivitiesComponent],
})
export class RandomActivitiesComponentModule {}
