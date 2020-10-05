export const SET_CURRENT_SCHEDULE = "SET_CURRENT_SCHEDULE";
export const OPEN_SCHEDULE_DIALOG = "OPEN_SCHEDULE_DIALOG";
export const CLOSE_SCHEDULE_DIALOG = "CLOSE_SCHEDULE_DIALOG";

export const setCurrentSchedule = payload => ({
    type: SET_CURRENT_SCHEDULE,
    payload
});

export const openScheduleDialog = payload => ({
    type: OPEN_SCHEDULE_DIALOG,
    payload
});

export const closeScheduleDialog = payload => ({
    type: CLOSE_SCHEDULE_DIALOG,
    payload
});