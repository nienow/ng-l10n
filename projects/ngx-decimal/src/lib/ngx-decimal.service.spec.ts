import { NgxDecimalService } from './ngx-decimal.service';

// spaces in formatting often return U+202F (NARROW NO-BREAK SPACE)
function transformSpaces(str: string) {
  return str.replace(/\s/, ' ');
}

describe('DecimalService', () => {
  let service: NgxDecimalService;
  beforeEach(() => {
    service = new NgxDecimalService();
  });

  it('should format number', () => {
    service.setLocale('en-US');
    expect(service.formatNumber(1234.56)).toEqual('1,234.56');
    expect(service.formatNumber(-1234.56)).toEqual('-1,234.56');
    service.setLocale('de-DE');
    expect(service.formatNumber(1234.56)).toEqual('1.234,56');
    expect(service.formatNumber(-1234.56)).toEqual('-1.234,56');
    service.setLocale('fr-FR');
    expect(transformSpaces(service.formatNumber(1234.56))).toEqual('1 234,56');
    expect(transformSpaces(service.formatNumber(-1234.56))).toEqual('-1 234,56');
    service.setLocale('es-ES');
    expect(service.formatNumber(1234.56)).toEqual('1234,56');
    expect(service.formatNumber(-1234.56)).toEqual('-1234,56');
  });

  it('should format percent', () => {
    service.setLocale('en-US');
    expect(service.formatPercent(.89)).toEqual('89%');
    service.setLocale('de-DE');
    expect(transformSpaces(service.formatPercent(.89))).toEqual('89 %');
    service.setLocale('tr-TR');
    expect(service.formatPercent(.89)).toEqual('%89');
  });

  it('should format currency', () => {
    service.setLocale('en-US');
    expect(service.formatCurrency(1234.56, 'USD')).toEqual('$1,234.56');
    expect(service.formatCurrency(1234.56, 'EUR')).toEqual('€1,234.56');
    service.setLocale('de-DE');
    expect(transformSpaces(service.formatCurrency(1234.56, 'EUR'))).toEqual('1.234,56 €');
  });

  it('should parse valid number', () => {
    service.setLocale('en-US');
    expect(service.parseNumber('1,234.56')).toEqual(1234.56);
    expect(service.parseNumber('-1,234.56')).toEqual(-1234.56);
    expect(service.parseNumber('1')).toEqual(1);
    expect(service.parseNumber('')).toEqual(null);
    service.setLocale('de-DE');
    expect(service.parseNumber('1.234,56')).toEqual(1234.56);
    service.setLocale('es-ES');
    expect(service.parseNumber('1234,56')).toEqual(1234.56);
  });

  it('should return NaN if parsing invalid number', () => {
    service.setLocale('en-US');
    expect(service.parseNumber('a')).toEqual(Number.NaN);
    expect(service.parseNumber('1.2.3')).toEqual(Number.NaN);
  });
});
