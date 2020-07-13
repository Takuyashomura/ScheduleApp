import React from 'react';
import DayElement from '../dayElement/dayElement';
import { GridList, Typography } from '@material-ui/core';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import './calendarBorad.css';

const days = ['日','月','火','水','木','金','土'];

const createCalendar = () => {

    //今月の最初の日
    const firstDay = dayjs().startOf('month');

    //最初の日の曜日用のindex
    const firstDayIndex = firstDay.day();
    return Array(35)
    .fill(0)
    .map((_, i) => {
        const diffFromFirstDay = i - firstDayIndex;
        const day = firstDay.add(diffFromFirstDay, "day" );
        return day;
    })
};

const calendar = createCalendar();

const CalendarBorad = () => {
    return (
        <div className="container">
            <GridList className="glid" cols={ 7 } spacing={ 0 } cellHeight='auto'>
            { days.map(day => (
                <li key={day}>
                    <Typography
                    className="day"
                    color="textSecondary"
                    align="center"
                    variant="caption"
                    component="div">
                    { day }
                    </Typography>
                </li>
            ))};
            { calendar.map(c=> (
                <li key={ c.toISOString() }>
                   <DayElement day={ c }/>
                </li>
            ))};
            </GridList>
        </div>
    )
}

export default CalendarBorad;