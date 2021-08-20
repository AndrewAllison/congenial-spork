import { DateTime } from 'luxon';
import { calculateDaysBetween, calculateDiffBetween } from './diff';

describe('date-functions', () => {
  describe('calculateDiffBetween', () => {
    it('should return the appropriate number of days.', () => {
      const dueDate = DateTime.now().minus({ days: 4 });
      const daysBetween = calculateDaysBetween(dueDate);
      expect(daysBetween).toEqual(-4);
    });
    it('should handle forward dates.', () => {
      const dueDate = DateTime.now().plus({ days: 4 });
      const daysBetween = calculateDaysBetween(dueDate);
      expect(daysBetween).toEqual(4);
    });
    it('should return the appropriate number of days.', () => {
      const dueDate = DateTime.now().minus({ years: 1 });
      const daysBetween = calculateDaysBetween(dueDate);
      expect(daysBetween).toEqual(-365); // may fail if it's a leap year.
    });
  });
  describe('calculateDaysBetween', () => {
    it('should return the correctly formatted values with default rounding', () => {
      const dueDate = DateTime.now().minus({
        days: 4,
        months: 2,
        weeks: 1,
        years: 1,
      });
      const daysBetween = calculateDiffBetween(dueDate);
      expect(daysBetween.days).toEqual(-4);
      expect(daysBetween.weeks).toEqual(-1);
      expect(daysBetween.weeks).toEqual(-1);
      expect(daysBetween.months).toEqual(-2);
    });
  });
});
