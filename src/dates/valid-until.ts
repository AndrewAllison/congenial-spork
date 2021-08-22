import { DateTime, DurationInput } from 'luxon'

export const validUntil = (until: DurationInput): Date => {
  const date = DateTime.now().plus(until)
  return new Date(date.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS))
}
