import React from 'react';
import DayElement from '../dayElement/dayElement';
import { GridList, Typography } from '@material-ui/core';
import 'dayjs/locale/ja';
import './calendarBoard.css';

const days = ['日','月','火','水','木','金','土'];

const CalendarBoard = ({ calendar, month }) => {
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
                   <DayElement day={ c } month={ month } />
                </li>
            ))};
            </GridList>
        </div>
    )
}

export default CalendarBoard;