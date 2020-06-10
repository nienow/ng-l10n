# ngx-decimal

This is a number format library for Angular. 

## Input field directive

The `ngx-decimal` directive can be used to allow entry of a number in any locale. The type should be `text` instead of `number`, since `number` doesn't support other locales. 

```html
<input type="text" ngxDecimal [(ngModel)]="numberValue">
```

## Display Components

The components will update the displayed value when either the value or the locale changes.

```html
<ngx-decimal [value]="myNumber"></ngx-decimal>
<ngx-decimal-percent [value]="myPercent"></ngx-decimal-percent>
<ngx-decimal-currency [value]="myCurrency" isoCode="USD"></ngx-decimal-currency>
```

## Display Pipes

The pipes will update the display when the value changes, but will not update the display when the locale is changed.

```html
<div>{{ myNumber | ngxDecimal }}</div>
<div>{{ myPercent | ngxDecimalPercent }}</div>
<div>{{ myCurrency | ngxDecimalCurrency:currencyCode }}</div>
```

## Service

Inject the service into any class in the constructor.

```typescript
constructor(private decimalService: NgxDecimalService) {}
```

### Locale

By default, the locale of the user's browser will be used to format the numbers. The locale can also be set manually.

#### Set locale

```typescript
this.decimalService.setLocale('de-DE');
```

#### Clear locale

Reset the locale to use the user's browser again.

```typescript
this.decimalService.clearLocale();
```

#### Format numbers

```typescript
this.decimalService.formatNumber(1234.56); // 1.234,56
this.decimalService.formatPercent(0.56); // 56%
```

#### Format currency

A currency code is required to format as a currency. If no currency symbol is needed, `formatNumber` should be used instead.

```typescript
this.decimalService.formatCurrency(1234.56, 'USD');  // $1.234,56
```

#### Parse Number

Parses a string to obtain a number. The string is expected to be in the set locale.

```typescript
this.decimalService.parseNumber('1.234,56'); // 1234.56
```

#### Number Validity

Check if a string is a valid number in the set locale. Can be used for form validation.

```typescript
this.decimalService.isNumberValid('1.234,56'); // true
this.decimalService.isNumberValid('1234,56'); // true
this.decimalService.isNumberValid('1,234,56'); // false
```

## Form Validator

There is a built in validator for reactive forms.

```typescript
const form = new FormGroup({
    myNumber: new FormControl(1.23, [this.decimalService.validator()])
});
```
