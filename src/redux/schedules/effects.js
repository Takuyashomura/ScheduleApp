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
    console.log('@@@@1');
    try {
    const result = await get(`schedulesApi/schedules?month=${ month }&year=${ year }`);
    const formatedSchedules = result.map(r => formatSchedules( r ));
    dispatch(schedulesFetchItem( formatedSchedules ))

    } catch ( error ) {
        dispatch(asyncSchedulesFailur( error ))
    };
}

export const asyncAddScheduleItem = schedule => async dispatch => {
    console.log('@@@@2');
    try{
    const addSchedule = { ...schedule, date: schedule.date.toISOString() };
    console.log(addSchedule);
    const result = await post( 'schedulesApi/schedules', addSchedule );
    console.log('@@@@4');
    const newSchedule = formatSchedules( result )
    console.log('@@@@5');

    dispatch(scheduleAddItem( newSchedule ));

    } catch (error) {
        dispatch(asyncSchedulesFailur( error ))
    }
}

