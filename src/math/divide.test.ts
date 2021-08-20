import { divide } from './divide';

describe('divide', () => {
  it('should devide 2 numbers', () => {
    const number1 = 12;
    const number2 = 2;
    const result = divide(number1, number2);

    expect(result).toEqual(6);
  });
});
