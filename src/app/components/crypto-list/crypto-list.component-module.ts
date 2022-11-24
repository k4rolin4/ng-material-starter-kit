import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CryptoListComponent } from './crypto-list.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [MatCardModule, CommonModule, MatChipsModule],
  declarations: [CryptoListComponent],
  providers: [],
  exports: [CryptoListComponent],
})
export class CryptoListComponentModule {}
