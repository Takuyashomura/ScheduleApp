import { ADD_USER_NAME_LIST, 
        SET_ACTIVE_USER,
        DELETE_USER_NAME_LIST,
        ASYNC_USER_NAME_LIST_FAILUR
         } from './users_actions';

const init = {
    users: [],
    activeUser: "sample"
}

const userNameListReducer = ( state = init, action ) => {
    const { type, payload, error } = action;
    switch( type ){
        case ADD_USER_NAME_LIST:
            return {
                ...state,
                users: [ ...state.users, { ...payload }]
            };
        
        case SET_ACTIVE_USER:
            return {
                ...state,
                activeUser: { ...payload }
            };

        case DELETE_USER_NAME_LIST:
            return {
                ...state,
                users: payload
            };
        
        case ASYNC_USER_NAME_LIST_FAILUR:
            return {
                ...state,
                errorMessage: error
            };
        
        default:
            return state;
    }
};

export default userNameListReducer;