import { divide } from './divide';
import { multiply } from './multiply';

describe('divide', () => {
  it('should devide 2 numbers', () => {
    const number1 = 6;
    const number2 = 2;
    const result = multiply(number1, number2);

    expect(result).toEqual(12);
  });
});
