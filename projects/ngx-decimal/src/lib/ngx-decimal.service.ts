import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidatorFn
} from '@angular/forms';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxDecimalService {

  private groupSymbol: string;
  private decimalSymbol: string;
  private locale: BehaviorSubject<string> = new BehaviorSubject(undefined);

  constructor() {
    this.clearLocale(); // use browser default
  }

  public clearLocale() {
    this.setLocale(undefined);
  }

  public setLocale(locale: string): void {
    this.determineSymbols(locale);
    this.locale.next(locale);
  }

  public watchLocaleChange(): Observable<string> {
    return this.locale.asObservable();
  }

  public formatCurrency(value: number, currencyIsoCode: string): string {
    return this.format(value, {
      style: 'currency',
      currency: currencyIsoCode
    });
  }

  public formatNumber(value: number): string {
    return this.format(value, {
      style: 'decimal'
    });
  }

  public formatPercent(value: number): string {
    return this.format(value, {
      style: 'percent'
    });
  }

  public parseNumber(value: string): number {
    if (!value) {
      return null;
    }
    if (!this.isNumberValid(value)) {
      return Number.NaN;
    }

    const negative = (value.indexOf('-') >= 0);
    const newValue = this.cleanUpValue(value);

    let newNumber = Number(newValue);
    if (negative) {
      newNumber = newNumber * -1;
    }

    return newNumber;
  }

  public isNumberValid(value: string): boolean {
    if (!value) {
      return false;
    }

    const newValue = this.cleanUpValue(value);
    if (newValue.length === 0) {
      return false;
    }

    const newNumber = Number(newValue);
    return !(Number.isNaN(newNumber) || !Number.isFinite(newNumber));
  }

  public validator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!this.isNumberValid(control.value)) {
        return {
          numberFormat: {
            value: control.value
          }
        };
      }
    };
  }

  private cleanUpValue(value: string): string {
    return value.split(this.groupSymbol)
    .join('')
    .replace(/\s/g, '')
    .replace(/^-/, '').replace(/-$/, '')
    .replace(this.decimalSymbol, '.');
  }

  private format(value: number, options: any): string {
    if (value === null || value === undefined) {
      return '';
    }
    return new Intl.NumberFormat(this.locale.value, options).format(value);
  }

  private determineSymbols(locale: string): void {
    const testFormat = new Intl.NumberFormat(locale, {style: 'decimal'}).format(10000 / 3);
    this.groupSymbol = testFormat[1];
    this.decimalSymbol = testFormat[5];
  }
}
