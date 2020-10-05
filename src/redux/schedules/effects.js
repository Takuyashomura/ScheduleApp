import {
    scheduleAddItem,
    schedulesFetchItem,
    scheduleDeleteItem,
    asyncSchedulesFailur
    } from '../../redux/schedules/schedules_actions';
import { 
    get,
    post,
    remove
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

export const asyncDeleteScheduleItem = id => async (dispatch, getState) => {
        const parsedId = parseInt( id, 10)
        const currentItems = getState().schedules.items;
        try{
            await remove(`schedulesApi/schedules/${ parsedId }`);
            const newSchedules = currentItems.filter( s => s.id !== parsedId )

            dispatch( scheduleDeleteItem( newSchedules ) );
        } catch ( error ){
            dispatch( asyncSchedulesFailur( error ) );
        }
}