import { ADD_USER_NAME, ADD_RESET_USER_NAME } from './addUser_actions';
const init = {
    form: { name: ""
    }
};

const addUserNameReducer = ( state = init, action ) => {
    const { type, payload } = action;
    switch( type ) {
        case ADD_USER_NAME:
            return { ...state, form:{ ...state.form, ...payload } };

        case ADD_RESET_USER_NAME:
            return init;

        default:
            return state;
    }
};

export default addUserNameReducer;