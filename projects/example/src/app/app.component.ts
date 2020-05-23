import { Component } from '@angular/core';
import { NgxDecimalService } from '../../../ngx-decimal/src/lib/ngx-decimal.service';
import { LOCALE_LIST } from './locales';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locales = LOCALE_LIST;
  locale;
  decimalValue = 1234.56;
  percentValue = 0.38499;

  code = {
    one: '<input type="text" ngxDecimal [(ngModel)]="decimalValue">',
    two: '<lib-number [value]="decimalValue"></lib-number>',
    service: 'stuff'
  };

  constructor(private decimalService: NgxDecimalService) {
    this.locale = 'en-US';
    this.changeLocale();
  }

  changeLocale() {
    this.decimalService.setLocale(this.locale);
  }
}
