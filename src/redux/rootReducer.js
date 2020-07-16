import { combineReducers } from 'redux';
import calendarReducer from './calendar/calendar_reducer';

const rootReducer = combineReducers({ calendar: calendarReducer });

export default rootReducer;