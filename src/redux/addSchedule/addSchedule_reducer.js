import { 
        ADD_SCHEDULE_SET_VALUE,
        ADD_SCHEDULE_OPEN_DIALOG,
        ADD_SCHEDULE_CLOSE_DIALOG } from './addSchedule_actions';
import dayjs from 'dayjs';

const init = {
    form: {
        dayOff: false,
        date: dayjs(),
        comment: ""
    },
    isDialogOpen: false
};

const addScheduleReducer = ( state = init, action) => {
    const { type, payload } = action;
    switch( type ) {
        case ADD_SCHEDULE_SET_VALUE:
            return { ...state, form:{ ...state.form, ...payload }};

        case ADD_SCHEDULE_OPEN_DIALOG:
            return { ...state, isDialogOpen: true };

        case ADD_SCHEDULE_CLOSE_DIALOG:
            return init;

        default:
            return state;
    }
};

export default addScheduleReducer;

