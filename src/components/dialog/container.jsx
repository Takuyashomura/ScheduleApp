import AddScheduleDialog from './dialog.jsx';
import { addScheduleCloseDialog, addScheduleSetValue } from '../../redux/addSchedule/addSchedule_actions';
import { schedulesItems } from '../../redux/schedules/schedules_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch( addScheduleCloseDialog() );
    },

    setSchedule: value => {
        dispatch( addScheduleSetValue( value ) );
    },

    saveSchedule: schedule => {
        dispatch( schedulesItems( schedule ) );
        dispatch( addScheduleCloseDialog() )
    }
});

const mergeProps = ( stateProps, dispatchProps ) => ({
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
        const {
            schedule: { form: schedule }
        } = stateProps;
        dispatchProps.saveSchedule( schedule );
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog);

