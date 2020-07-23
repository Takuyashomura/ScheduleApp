import { combineReducers } from 'redux';
import calendarReducer from './calendar/calendar_reducer';
import addScheduleReducer from './addSchedule/addSchedule_reducer';
import schedulesReducer from './schedules/schedules_reducer';

const rootReducer = combineReducers({ 
    calendar: calendarReducer,
    addSchedule: addScheduleReducer,
    schedules: schedulesReducer });

export default rootReducer;