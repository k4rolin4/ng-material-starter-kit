import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserDetailsService } from '../../services/user-details.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  readonly userDetails$: Observable<UserModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._userDetailsService.getOne(data['id']))
    );

  constructor(
    private _userDetailsService: UserDetailsService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
