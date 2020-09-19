import { 
    SCHEDULE_ADD_ITEM,
    SCHEDULES_FETCH_ITEM,
    ASYNC_SCHEDULES_FAILUR} from './schedules_actions';

const init = {
    items: [],
    isLoading: false
};

const schedulesReducer = ( state = init, action ) => {
    const { type, payload, error } = action
    switch( type ) {
        
        case SCHEDULE_ADD_ITEM:
            return {
                ...state,
                items: [ ...state.items, payload ]
            }
        
        case SCHEDULES_FETCH_ITEM:
            return {
                ...state,
                items: payload
            }

        case ASYNC_SCHEDULES_FAILUR:
            return {
                ...state,
                error
            }
        default:
            return state;
    }
};

export default schedulesReducer;
