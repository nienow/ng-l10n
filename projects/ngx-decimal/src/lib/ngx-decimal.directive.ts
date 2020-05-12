import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Renderer2
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { NgxDecimalService } from './ngx-decimal.service';

@Directive({
  selector: 'input[ngxDecimal]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxDecimalDirective),
      multi: true
    }
  ]
})
export class NgxDecimalDirective implements ControlValueAccessor {

  value;

  constructor(private decimalService: NgxDecimalService, private renderer: Renderer2, private elementRef: ElementRef) {
    this.decimalService.watchLocaleChange().subscribe(() => {
      this.writeValue(this.value);
    });
  }

  @HostListener('input', ['$event'])
  public onInput($event) {
    this.onChange(this.decimalService.parseNumber($event.target.value));
    this.onTouched();
  }

  public onChange(value: number) {
    // no action
  }

  @HostListener('blur')
  public onTouched() {
    // no action
  }

  public writeValue(value: number) {
    this.value = value;
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', this.decimalService.formatNumber(value));
  }

  public registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
