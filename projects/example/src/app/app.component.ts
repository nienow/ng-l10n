import { Component } from '@angular/core';
import { LOCALE_LIST } from './locales';
import { NgxDecimalService } from 'ngx-decimal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locales = LOCALE_LIST;
  locale;
  decimalValue = 1234.56;

  code = {
    one: '<input type="text" ngxDecimal [(ngModel)]="decimalValue">',
    two: '<ngx-decimal [value]="decimalValue"></ngx-decimal>',
  };

  constructor(private decimalService: NgxDecimalService) {
    this.locale = 'en-US';
    this.changeLocale();
  }

  changeLocale() {
    this.decimalService.setLocale(this.locale);
  }
}
