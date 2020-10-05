import React from 'react';
import './schedule.css';

const Schedule = ({ schedule, onClickSchedule }) => {
    return (
        <div className="schedule" onClick={ e => onClickSchedule( schedule, e )}>{ schedule.name }:{ schedule.comment }</div>
    )
};

export default Schedule;