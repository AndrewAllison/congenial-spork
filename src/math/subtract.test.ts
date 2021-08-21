import { subtract } from './subtract';

describe('subtract', () => {
  it('should subtract 2 numbers', () => {
    const number1 = 12;
    const number2 = 2;
    const result = subtract(number1, number2);

    expect(result).toEqual(10);
  });
});
