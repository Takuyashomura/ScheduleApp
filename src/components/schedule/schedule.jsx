import React from 'react';
import './schedule.css';

const Schedule = ({ schedule }) => {
    return (
        <div className="schedule">{ schedule.name }:{ schedule.comment }</div>
    )
};

export default Schedule;