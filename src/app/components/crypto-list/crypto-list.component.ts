import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { BinanceModel } from '../../models/binance.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  styleUrls: ['./crypto-list.component.scss'],
  templateUrl: './crypto-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoListComponent {
  readonly cryptoData$: Observable<BinanceModel[]> =
    this._cryptoService.getAll();

  constructor(private _cryptoService: CryptoService) {}
}
