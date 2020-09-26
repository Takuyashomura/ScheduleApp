import {
    scheduleAddItem,
    schedulesFetchItem,
    asyncSchedulesFailur
    } from '../../redux/schedules/schedules_actions';
import { 
    get,
    post 
    } from '../../services/api';
import { formatSchedules } from '../../services/schedule';

export const asyncFetchSchedules = ({ month, year }) => async dispatch => {
    try {
    const result = await get(`schedulesApi/schedules?month=${ month }&year=${ year }`);
    const formatedSchedules = result.map(r => formatSchedules( r ));
    dispatch(schedulesFetchItem( formatedSchedules ))

    } catch ( error ) {
        dispatch(asyncSchedulesFailur( error ))
    };
}

export const asyncAddScheduleItem = schedule => async dispatch => {
    try{
    const addSchedule = { ...schedule, date: schedule.date.toISOString() };
    const result = await post( 'schedulesApi/schedules', addSchedule );
    const newSchedule = formatSchedules( result )

    dispatch(scheduleAddItem( newSchedule ));

    } catch (error) {
        dispatch(asyncSchedulesFailur( error ))
    }
}

