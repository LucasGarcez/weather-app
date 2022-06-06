import {DaysOfWeek} from 'src/models/DaysOfWeek';

export interface Day {
  value: DaysOfWeek;
  label: string;
}
export const DAYS: Day[] = [
  {
    value: DaysOfWeek.Monday,
    label: 'Mon',
  },
  {
    value: DaysOfWeek.Tuesday,
    label: 'Tue',
  },
  {
    value: DaysOfWeek.Wednesday,
    label: 'Wed',
  },
  {
    value: DaysOfWeek.Thursday,
    label: 'Thu',
  },
  {
    value: DaysOfWeek.Friday,
    label: 'Fri',
  },
  {
    value: DaysOfWeek.Saturday,
    label: 'Sat',
  },
  {
    value: DaysOfWeek.Sunday,
    label: 'Sun',
  },
];
