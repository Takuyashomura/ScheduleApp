import { connect } from 'react-redux';
import CalendarBoard from './calendarBoard';
import { addScheduleOpenDialog, addScheduleSetValue } from '../../redux/addSchedule/addSchedule_actions';
import { asyncFetchSchedules } from '../../redux/schedules/effects';
import { createCalendar } from '../../services/calendar';
import { setSchedule } from '../../services/schedule';

const mapStateToProps = state => ({ calendar: state.calendar, schedules: state.schedules, usersName: state.usersName });

const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: d => {
        dispatch( addScheduleOpenDialog() );
        dispatch( addScheduleSetValue({ date: d }) );
    },

    fetchSchedules: month => {
        dispatch( asyncFetchSchedules( month ) )
    }
});

const mergeProps = ( stateProps, dispatchProps ) => {
const { calendar: month,
        schedules: { items: schedules }} = stateProps;

const calendar = setSchedule(createCalendar( month ), schedules);

    return {
    ...stateProps,
    ...dispatchProps,
    fetchSchedules: () => dispatchProps.fetchSchedules( month ),
    calendar,
    month
};
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);