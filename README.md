# NgL10n

This is a number format library that

## Input field directive

The `blah` directive can be used to allow entry of a number in any locale.

```html
<input type="text" l10n-number [(ngModel)]="numberValue">
```

## Display Components

The components will update the displayed value when either the value or the locale changes.

```html
<lib-number [value]="myNumber"></lib-number>
<lib-percent [value]="myPercent"></lib-percent>
<lib-currency [value]="myCurrency" [isoCode]="myCurrency"></lib-currency>
```

## Display Pipes

The pipes will update the display when the value changes, but will not update the display when the locale is changed.

```html
<div>{{ myNumber | libNumber }}</div>
<div>{{ myPercent | libPercent }}</div>
<div>{{ myCurrency | libCurrency:myCurrency }}</div>
```

## Form Validator

```typescript
const form = new FormGroup({
    myNumber: new FormControl(1.23, [this.l10nService.validator()])
});
```

## Service

### Locale

By default, the locale of the user's browser will be used to format the numbers.

#### Set locale

```typescript
this.l10nService.setLocale('de-DE');
```

#### Clear locale

Reset the locale to use the user's browser again.

```typescript
this.l10nService.clearLocale();
```

#### Set number symbols manually

Normally the symbols used for the group & decimal place are calculated automatically when using a locale. But they can also be set manually.

```typescript
// set group and decimal symbols
this.l10nService.setCustomSymbols('-', '*');
```

This would format numbers like this: 1-234*56

#### Format numbers

```typescript
this.l10nService.formatNumber(1234.56); // 
this.l10nService.formatPercent(0.56); // 
```

#### Format currency

A currency code is required to format as a currency. If no currency symbol is needed, `formatNumber` should be used instead.

```typescript
this.l10nService.formatCurrency(1234.56, 'USD'); // 
```

#### Parse Number

Parses a string to obtain a number. The string is expected to be in the set locale.

```typescript
this.l10nService.parseNumber('1.234,56');
```

#### Number Validity

Check if a string is a valid number in the set locale.

```typescript
this.l10nService.isNumberValid('1.234,56');
```
