export const SCHEDULE_ADD_ITEM = "SCHEDULE_ADD_ITEM";
export const SCHEDULES_FETCH_ITEM = "SCHEDULES_FETCH_ITEM";
export const SCHEDULE_DELETE_ITEM ="SCHEDULE_DELETE_ITEM";
export const ASYNC_SCHEDULES_FAILUR = "ASYNC_SCHEDULES_FAILUR";


export const scheduleAddItem = payload => ({
    type: SCHEDULE_ADD_ITEM,
    payload
});

export const schedulesFetchItem = payload => ({
    type: SCHEDULES_FETCH_ITEM,
    payload
});

export const scheduleDeleteItem = payload => ({
    type: SCHEDULE_DELETE_ITEM,
    payload
})

export const asyncSchedulesFailur = error => ({
    type: ASYNC_SCHEDULES_FAILUR,
    error
});

