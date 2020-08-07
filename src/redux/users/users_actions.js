export const USER_NAME_LIST = "USER_NAME_LIST";
export const SET_ACTIVE_USER = "SET_ACTIVE_USER";

export const userNameList = payload => ({
    type: USER_NAME_LIST,
    payload
});

export const setActiveUser = payload => ({
    type: SET_ACTIVE_USER,
    payload
})