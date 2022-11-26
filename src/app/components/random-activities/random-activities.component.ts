import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { BoredModel } from '../../models/bored.model';
import { BoredService } from '../../services/bored.service';

@Component({
  selector: 'app-random-activities',
  templateUrl: './random-activities.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RandomActivitiesComponent {
  readonly randomActivities$: Observable<BoredModel> =
    this._boredService.getOne();

  constructor(private _boredService: BoredService) {}
}
