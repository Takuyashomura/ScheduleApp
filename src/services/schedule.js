import { isSameDay } from './calendar';

export const setSchedule = ( calendar, schedules ) => 
    calendar.map(c => ({
        date: c,
        schedules: schedules.filter(e => isSameDay(e.date, c))
    }));