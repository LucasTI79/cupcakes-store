import { currencyFormat } from './currencyFormat';

describe('CurrencyFormat', () => {
  test('Should be return a formatted currency', () => {
    expect(currencyFormat(10)).toBe('R$ 10,00');
  });
});
