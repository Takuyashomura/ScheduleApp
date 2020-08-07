export const ADD_USER_NAME = "ADD_USER_NAME";
export const ADD_RESET_USER_NAME ="ADD_RESET_USER_NAME";

export const addUserName = payload => ({
    type: ADD_USER_NAME,
    payload
});

export const addResetUserName = () => ({
    type: ADD_RESET_USER_NAME,
});
