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
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
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
