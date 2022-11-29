import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FilteredProductListSubjectComponent } from './filtered-product-list-subject.component';
import { RouterLink } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    RouterLink,
    NgForOf,
    CommonModule,
    FlexModule,
  ],
  declarations: [FilteredProductListSubjectComponent],
  providers: [],
  exports: [FilteredProductListSubjectComponent],
})
export class FilteredProductListSubjectComponentModule {}
