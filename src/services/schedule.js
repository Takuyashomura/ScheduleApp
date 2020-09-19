import { isSameDay } from './calendar';
import dayjs from 'dayjs';

export const setSchedule = ( calendar, schedules ) => 
    calendar.map(c => ({
        date: c,
        schedules: schedules.filter(e => isSameDay(e.date, c))
    }));

export const formatSchedules = schedule => ({
    ...schedule,
    date: dayjs( schedule.date )
});