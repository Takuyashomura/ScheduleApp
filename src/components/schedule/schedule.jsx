import React from 'react';
import './schedule.css';

const Schedule = ({ schedule }) => {
    return (
        <div className="schedule">{ schedule.comment }</div>
    )
};

export default Schedule;