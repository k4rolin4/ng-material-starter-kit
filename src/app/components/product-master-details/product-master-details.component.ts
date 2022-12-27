import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-master-details',
  templateUrl: './product-master-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductMasterDetailsComponent {
  readonly productList$: Observable<ProductModel[]> =
    this._productService.getAll();
  private _selectedItemIdSubject: Subject<string> = new Subject<string>();
  public selectedItemId$: Observable<string> =
    this._selectedItemIdSubject.asObservable();
  readonly details$: Observable<ProductModel> = this.selectedItemId$.pipe(
    switchMap((data) => this._productService.getOne(data))
  );

  constructor(private _productService: ProductService) {}

  selectProduct(id: string): void {
    this._selectedItemIdSubject.next(id);
  }
}
