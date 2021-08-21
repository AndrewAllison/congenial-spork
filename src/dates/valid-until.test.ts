import { validUntil } from './valid-until';

describe('validUntil', () => {
  it('should return a valid date', () => {
    const now = new Date();

    const until = { hours: 1 };
    const date = validUntil(until);

    expect(date.getHours()).toEqual(now.getHours() + 1);
  });
});
