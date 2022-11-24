import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule, MatCardModule, MatListModule],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent],
})
export class CategoriesListComponentModule {}
