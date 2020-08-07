import { USER_NAME_LIST, SET_ACTIVE_USER } from './users_actions';

const init = {
    users: [],
    activeUser: "sample"
}

const userNameListReducer = ( state = init, action ) => {
    const { type, payload } = action;
    switch( type ){
        case USER_NAME_LIST:
            return {
                ...state,
                users: [ ...state.users, { ...payload, id: state.users.length + 1 }]
            };
        
        case SET_ACTIVE_USER:
            return {
                ...state,
                activeUser: { ...payload }
            };
        
        default:
            return state;
    }
};

export default userNameListReducer;