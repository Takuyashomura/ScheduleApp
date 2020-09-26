import React, { useEffect, useCallback } from 'react';
import DayElement from '../dayElement/dayElement';
import { GridList, Typography } from '@material-ui/core';
import 'dayjs/locale/ja';
import './calendarBoard.css';

const days = ['日','月','火','水','木','金','土'];

const CalendarBoard = ({ calendar, month,openAddScheduleDialog ,schedules, fetchSchedules ,usersName}) => {

///////////////データ初期取得///////////////////
    useEffect(() => {
        fetchSchedules()
    },[]); 
//////////////////////////////////////////////

    const openDialog = date => {
        if( !usersName.activeUser.user ){
            alert('名前を設定してください。');
        } else {
            return openAddScheduleDialog(date);
        }
    }
    
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
            { calendar.map(({ date, schedules }) => (
                <li key={ date.toISOString() } onClick={ () => openDialog(date) }>
                   <DayElement day={ date } month={ month } schedules={ schedules } />
                </li>
            ))};
            </GridList>
        </div>
    )
}

export default CalendarBoard;