import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { NgxDecimalService } from './ngx-decimal.service';

@Pipe({name: 'ngxDecimal'})
export class NgxDecimalPipe implements PipeTransform {
  constructor(private decimalService: NgxDecimalService) {}

  public transform(value: number): string {
    return this.decimalService.formatNumber(value);
  }
}

@Pipe({name: 'ngxDecimalPercent'})
export class NgxDecimalPercentPipe implements PipeTransform {
  constructor(private decimalService: NgxDecimalService) {}

  public transform(value: number): string {
    return this.decimalService.formatPercent(value);
  }
}

@Pipe({name: 'ngxDecimalCurrency'})
export class NgxDecimalCurrencyPipe implements PipeTransform {
  constructor(private decimalService: NgxDecimalService) {}

  public transform(value: number, currencyISOCode: string): string {
    return this.decimalService.formatCurrency(value, currencyISOCode);
  }
}
