import AddScheduleDialog from './dialog.jsx';
import { addScheduleCloseDialog, addScheduleSetValue } from '../../redux/addSchedule/addSchedule_actions';
import { asyncAddScheduleItem } from '../../redux/schedules/effects';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ schedule: state.addSchedule, usersName: state.usersName });

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch( addScheduleCloseDialog() );
    },

    setSchedule: value => {
        dispatch( addScheduleSetValue( value ) );
    },

    saveSchedule: schedule => {
        dispatch( asyncAddScheduleItem( schedule ) );
        dispatch( addScheduleCloseDialog() );
    }
});

const mergeProps = ( stateProps, dispatchProps ) =>({
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
        const {
            schedule: { form: schedule }
        } = stateProps;
        dispatchProps.saveSchedule( schedule);
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog);

