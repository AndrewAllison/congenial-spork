import { percentageDifference } from './index';

describe('math-functions', () => {
  describe('percentageDifference', () => {
    it('should calculate a percentage difference.', () => {
      const tests = [
        [50, 100, 50],
        [15, 30, 50],
      ];

      tests.forEach((r) =>
        expect(percentageDifference(r[0], r[1])).toEqual(r[2]),
      );
    });
  });
});
