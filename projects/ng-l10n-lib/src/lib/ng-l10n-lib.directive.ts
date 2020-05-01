import {
  Directive,
  OnInit
} from '@angular/core';

@Directive({
  selector: 'input[l10n-number]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgL10nLibDirective),
      multi: true
    }
  ]
})
export class NgL10nLibDirective implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
