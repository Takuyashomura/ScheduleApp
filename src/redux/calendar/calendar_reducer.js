import { CALENDAR_SET_MONTH } from './calendar_actions';
import { formatMonth } from '../../services/calendar'; 
import dayjs from 'dayjs';

const day = dayjs();

const init = formatMonth( day );

const calendarReducer = ( state = init, action ) => {
    const { type, payload } = action;
    switch( type ) {
        case CALENDAR_SET_MONTH:
            return payload;

        default:
            return state;
    }
};

export default calendarReducer;