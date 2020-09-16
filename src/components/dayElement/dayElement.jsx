import React from 'react';
import { isSameDay,
         isSameMonth,
         isFirstDay,
         getMonth
        } from '../../services/calendar';
import { Typography } from '@material-ui/core';
import Schedule from '../schedule/schedule';
import dayjs from 'dayjs';
import './dayElement.css';

const DayElement = ({ day, month, schedules }) => {

    //1日だけM月D日という表示、それ以外はD日
    const format = isFirstDay( day ) ? "M月D日" : "D";

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

    //当日の日付にマークをつける
    const today = dayjs();
    const isToday = isSameDay( day, today );

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

    //今月以外の日付をグレーダウン
    const currentMonth = getMonth( month );
    const isCurrentMonth = isSameMonth( day, currentMonth );
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
    return(
        <div className="element">
            <Typography
                className="date"
                color={ textColor }
                variant="caption"
                component="div"
                align="center"
                >
            <span className={ isToday ? "today" : "" }>
                { day.format(format) }
            </span>
            </Typography>
            <div className="schedules">
                { schedules.map( e => (
                    <Schedule key={e.id} schedule={e}/>
                ))}
            </div>
        </div>
    )
}

export default DayElement;
