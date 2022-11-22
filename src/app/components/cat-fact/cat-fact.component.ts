import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CatFactModel } from '../../models/cat-fact.model';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatFactComponent {
  readonly catFacts$: Observable<CatFactModel> = this._catService.getOne();

  constructor(private _catService: CatService) {}
}
