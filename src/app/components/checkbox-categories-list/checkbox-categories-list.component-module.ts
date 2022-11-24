import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxCategoriesListComponent } from './checkbox-categories-list.component';

@NgModule({
  imports: [MatCardModule, MatCheckboxModule, CommonModule],
  declarations: [CheckboxCategoriesListComponent],
  providers: [],
  exports: [CheckboxCategoriesListComponent],
})
export class CheckboxCategoriesListComponentModule {}
