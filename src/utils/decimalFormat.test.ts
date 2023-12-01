import { decimalFormat } from './decimalFormat';

describe('DecimalFormat', () => {
  it('Should be return a number without decimal points', () => {
    expect(decimalFormat(1)).toBe('1');
  });
  it('Should be return a formatted decimal with 1 decimal points', () => {
    expect(decimalFormat(10, 1)).toBe('10,0');
  });
  it('Should be return a formatted decimal with 2 decimal points', () => {
    expect(decimalFormat(10, 2)).toBe('10,00');
  });
});
