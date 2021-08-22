import { add } from './add';

describe('divide', () => {
  it('should add 2 numbers', () => {
    const number1 = 12;
    const number2 = 2;
    const result = add(number1, number2);

    expect(result).toEqual(14);
  });
});
