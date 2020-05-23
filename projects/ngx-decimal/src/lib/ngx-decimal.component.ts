import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { NgxDecimalService } from './ngx-decimal.service';
import { Subscription } from 'rxjs';

export abstract class NgxDecimalAbstractComponent implements OnInit, OnDestroy, OnChanges {
  @Input() value: number;
  output: string;
  localeSubscription: Subscription;
  public constructor(protected decimalService: NgxDecimalService) {
  }

  ngOnInit() {
    this.localeSubscription = this.decimalService.watchLocaleChange().subscribe(() => {
      this.output = this.decimalService.formatNumber(this.value);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.output = this.decimalService.formatNumber(this.value);
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
    this.output = this.decimalService.formatNumber(this.value);
  }
}

@Component({
  selector: 'ngx-decimal-percent',
  template: `{{output}}`
})
export class NgxDecimalPercentComponent extends NgxDecimalAbstractComponent {
  format() {
    this.output = this.decimalService.formatPercent(this.value);
  }
}

@Component({
  selector: 'ngx-decimal-currency',
  template: `{{output}}`
})
export class NgxDecimalCurrencyComponent extends NgxDecimalAbstractComponent {
  @Input() isoCode: string;
  format() {
    this.output = this.decimalService.formatCurrency(this.value, this.isoCode);
  }
}
