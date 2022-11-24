import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-checkbox-categories-list',
  styleUrls: ['./checkbox-categories-list.component.scss'],
  templateUrl: './checkbox-categories-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxCategoriesListComponent {
  readonly categoriesList$: Observable<ProductModel[]> =
    this._categoriesService.getAll();

  constructor(private _categoriesService: CategoriesService) {}
}
