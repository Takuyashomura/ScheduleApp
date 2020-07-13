import React from 'react';
import { Typography } from '@material-ui/core';
import dayjs from 'dayjs';
import './dayElement.css';

const DayElement = ({ day }) => {

    //最初の日付はxx月1日という表示にする
    const isFirstDay = day.date() === 1;

    //1日だけM月D日という表示、それ以外はD日
    const format = isFirstDay ? "M月D日" : "D";

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

    //当日の日付にマークをつける
    const today = dayjs();
    const compareformat = 'YYYYMMDD';
    const isToday = day.format( compareformat ) === today.format( compareformat );

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

    //今月以外の日付をグレーダウン
    const isCurrentMonth = day.month() === today.month();
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
        </div>
    )
}

export default DayElement;
