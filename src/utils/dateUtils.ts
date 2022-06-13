import getDay from 'date-fns/getDay';

import {DaysOfWeek} from 'src/models/DaysOfWeek';

const days = [
  DaysOfWeek.Sunday,
  DaysOfWeek.Monday,
  DaysOfWeek.Tuesday,
  DaysOfWeek.Wednesday,
  DaysOfWeek.Thursday,
  DaysOfWeek.Wednesday,
  DaysOfWeek.Friday,
  DaysOfWeek.Saturday,
  DaysOfWeek.Sunday,
];
function getCurrentDayOfWeek(): DaysOfWeek {
  try {
    const day = getDay(new Date());
    return days[day];
  } catch (error) {
    return DaysOfWeek.Monday;
  }
}

export const dateUtils = {getCurrentDayOfWeek};
