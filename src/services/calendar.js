import dayjs from 'dayjs';
import "dayjs/locale/ja";

dayjs.locale('ja');

export const createCalendar = month => {
    const firstDay = getMonth(month);
    const firstDayIndex = firstDay.day();

    return Array(35)
    .fill(0)
    .map(( _, i) => {
        const diffFromFirstDay = i - firstDayIndex;
        const day = firstDay.add(diffFromFirstDay, 'day' );
        return day;
    })
};

//月データを取得
export const getMonth = ({ year, month }) => {
    return dayjs(`${year}-${month}`);
};

//同じ日付かチェック
export const isSameDay = ( d1, d2 ) => {
    const format = 'YYYYMMDD';
    return d1.format( format ) === d2.format( format );
};

//同じ月かチェック
export const isSameMonth = ( m1, m2 ) => {
    const format = 'YYYYMM';
    return m1.format( format ) === m2.format( format );
};

export const isFirstDay = day => day.date() === 1;

//次の月データを取得
export const getNextMonth = month => {
    const day = getMonth( month ).add( 1, "month" );
    return formatMonth( day );
};

//前の月データを取得
export const getPreviousMonth = month => {
    const day = getMonth( month ).add( -1, "month" );
    return formatMonth( day );
};

export const formatMonth = day => ({
    month: day.month() + 1,
    year: day.year()
});