import { connect } from 'react-redux';
import CalendarBoard from './calendarBoard';
import { addScheduleOpenDialog, addScheduleSetValue } from '../../redux/addSchedule/addSchedule_actions';
import { createCalendar } from '../../services/calendar';
import { setSchedule } from '../../services/schedule';

const mapStateToProps = state => ({ calendar: state.calendar, schedules: state.schedules });

const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: d => {
        dispatch( addScheduleOpenDialog() );
        dispatch( addScheduleSetValue({ date: d }) );
    }
});

const mergeProps = (stateProps, dispatchProps ) => {
const { calendar: month,
        schedules: { items: schedules }} = stateProps;

const calendar = setSchedule(createCalendar( month), schedules);

    return {
    ...stateProps,
    ...dispatchProps,
    calendar,
    month
};
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);