import { combineReducers } from 'redux';
import calendarReducer from './calendar/calendar_reducer';
import addScheduleReducer from './addSchedule/addSchedule_reducer';
import schedulesReducer from './schedules/schedules_reducer';
import addUserNameReducer from './addUser/addUser_reducer';
import userNameListReducer from './users/users_reducer';

const rootReducer = combineReducers({ 
    calendar: calendarReducer,
    addUserName: addUserNameReducer,
    usersName: userNameListReducer,
    addSchedule: addScheduleReducer,
    schedules: schedulesReducer });

export default rootReducer;