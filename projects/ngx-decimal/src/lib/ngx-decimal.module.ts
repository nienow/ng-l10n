import { NgModule } from '@angular/core';
import { NgxDecimalDirective } from './ngx-decimal.directive';
import {
  NgxDecimalComponent,
  NgxDecimalCurrencyComponent,
  NgxDecimalPercentComponent
} from './ngx-decimal.component';
import {
  NgxDecimalCurrencyPipe,
  NgxDecimalPercentPipe,
  NgxDecimalPipe
} from './ngx-decimal.pipe';

@NgModule({
  declarations: [
    NgxDecimalDirective,
    NgxDecimalComponent,
    NgxDecimalPercentComponent,
    NgxDecimalCurrencyComponent,
    NgxDecimalPipe,
    NgxDecimalPercentPipe,
    NgxDecimalCurrencyPipe
  ],
  imports: [],
  exports: [
    NgxDecimalDirective,
    NgxDecimalComponent,
    NgxDecimalPercentComponent,
    NgxDecimalCurrencyComponent,
    NgxDecimalPipe,
    NgxDecimalPercentPipe,
    NgxDecimalCurrencyPipe
  ]
})
export class NgxDecimalModule {
}
