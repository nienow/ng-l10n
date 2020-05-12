import { Component } from '@angular/core';
import { NgxDecimalService } from '../../../ngx-decimal/src/lib/ngx-decimal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  locales = [
    'en-US',
    'de-DE'
  ];
  locale;
  decimalValue = 1234.56;
  percentValue = 0.38499;

  code = {
    one: '<input type="text" l10n-number [(ngModel)]="decimalValue">',
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
