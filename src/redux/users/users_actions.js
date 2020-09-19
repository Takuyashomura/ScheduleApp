export const ADD_USER_NAME_LIST = "ADD_USER_NAME_LIST";
export const SET_ACTIVE_USER = "SET_ACTIVE_USER";
export const DELETE_USER_NAME_LIST = "DELETE_USER_NAME_LIST";
export const ASYNC_USER_NAME_LIST_FAILUR = "ASYNC_USER_NAME_LIST_FAILUR";

export const addUserNameList = payload => ({
    type: ADD_USER_NAME_LIST,
    payload
});

export const setActiveUser = payload => ({
    type: SET_ACTIVE_USER,
    payload
});

export const deleteUserNameList = payload => ({
    type: DELETE_USER_NAME_LIST,
    payload
});

export const asyncUserNameListFailur = error => ({
    type: ASYNC_USER_NAME_LIST_FAILUR,
    error
});