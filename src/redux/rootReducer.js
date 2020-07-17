import { combineReducers } from 'redux';
import calendarReducer from './calendar/calendar_reducer';
import addScheduleReducer from './addSchedule/addSchedule_reducer';

const rootReducer = combineReducers({ 
    calendar: calendarReducer,
    addSchedule: addScheduleReducer });

export default rootReducer;