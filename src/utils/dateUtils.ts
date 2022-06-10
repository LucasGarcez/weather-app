import {DaysOfWeek} from 'src/models/DaysOfWeek';

function getCurrentDayOfWeek(): DaysOfWeek {
  try {
    const today = new Date().toLocaleString('en', {
      weekday: 'long',
    }) as DaysOfWeek;

    return DaysOfWeek[today];
  } catch (error) {
    return DaysOfWeek.Monday;
  }
}

export const dateUtils = {getCurrentDayOfWeek};
