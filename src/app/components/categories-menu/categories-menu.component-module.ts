import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesMenuComponent } from './categories-menu.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  declarations: [CategoriesMenuComponent],
  providers: [],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuComponentModule {
}
