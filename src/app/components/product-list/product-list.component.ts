import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.scss'],
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  readonly list$: Observable<ProductModel[]> = this._productService.getAll();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(
    void 0
  );
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<ProductModel[]> = this.refresh$.pipe(
    switchMap((data) => this._productService.getAll())
  );

  constructor(private _productService: ProductService) {}

  delete(id: string): void {
    this._productService
      .delete(id)
      .subscribe(() => this._refreshSubject.next());
  }
}
