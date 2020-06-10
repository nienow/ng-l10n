import {
  Component,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  SimpleChanges
} from '@angular/core';
import { NgxDecimalService } from './ngx-decimal.service';
import { Subscription } from 'rxjs';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class NgxDecimalAbstractComponent implements OnInit, OnDestroy, OnChanges {
  @Input() value: number;
  output: string;
  localeSubscription: Subscription;
  constructor(@Optional() protected decimalService: NgxDecimalService) {
  }

  ngOnInit() {
    this.localeSubscription = this.decimalService.watchLocaleChange().subscribe(() => {
      this.output = this.format();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.output = this.format();
    }
  }

  ngOnDestroy() {
    this.localeSubscription.unsubscribe();
  }

  abstract format();
}

@Component({
  selector: 'ngx-decimal',
  template: `{{output}}`
})
export class NgxDecimalComponent extends NgxDecimalAbstractComponent {
  format() {
    return this.decimalService.formatNumber(this.value);
  }
}

@Component({
  selector: 'ngx-decimal-percent',
  template: `{{output}}`
})
export class NgxDecimalPercentComponent extends NgxDecimalAbstractComponent {
  format() {
    return this.decimalService.formatPercent(this.value);
  }
}

@Component({
  selector: 'ngx-decimal-currency',
  template: `{{output}}`
})
export class NgxDecimalCurrencyComponent extends NgxDecimalAbstractComponent {
  @Input() isoCode: string;
  format() {
    return this.decimalService.formatCurrency(this.value, this.isoCode);
  }
}
