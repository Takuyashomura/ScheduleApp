import { 
    SET_CURRENT_SCHEDULE,
    OPEN_SCHEDULE_DIALOG,
    CLOSE_SCHEDULE_DIALOG
} from './currentSchedule_action';

const init = {
    item: null,
    isDialogOpen: false
}

const currentScheduleReducer = ( state = init, action) => {
    const { type, payload } = action;
    switch( type ){

        case SET_CURRENT_SCHEDULE:
            return {
                ...state,
                item: payload
            }

        case OPEN_SCHEDULE_DIALOG:
            return {
                ...state,
                isDialogOpen: true
            }

        case CLOSE_SCHEDULE_DIALOG:
            return {
                ...state,
                isDialogOpen: false
            }

        default: 
        return init
    }
}

export default currentScheduleReducer;