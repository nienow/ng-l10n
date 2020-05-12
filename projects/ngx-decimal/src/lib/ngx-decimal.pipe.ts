import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { NgxDecimalService } from './ngx-decimal.service';

@Pipe({name: 'ngxDecimal'})
export class NgxDecimalPipe implements PipeTransform {
  constructor(private l18nService: NgxDecimalService) {}

  public transform(value: number): string {
    return this.l18nService.formatNumber(value);
  }
}

@Pipe({name: 'ngxDecimalPercent'})
export class NgxDecimalPercentPipe implements PipeTransform {
  constructor(private l18nService: NgxDecimalService) {}

  public transform(value: number): string {
    return this.l18nService.formatPercent(value);
  }
}

@Pipe({name: 'ngxDecimalCurrency'})
export class NgxDecimalCurrencyPipe implements PipeTransform {
  constructor(private l18nService: NgxDecimalService) {}

  public transform(value: number, currencyISOCode: string): string {
    return this.l18nService.formatCurrency(value, currencyISOCode);
  }
}
