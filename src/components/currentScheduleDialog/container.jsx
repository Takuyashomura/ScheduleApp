import CurrentScheduleDialog from './currentScheduleDialog';
import { closeScheduleDialog } from '../../redux/currentSchedule/currentSchedule_action';
import { asyncDeleteScheduleItem } from '../../redux/schedules/effects';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ currentSchedule: state.currentSchedule })

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch( closeScheduleDialog() )
    },
    deleteSchedule: id => {
        dispatch( asyncDeleteScheduleItem( id ) )
        dispatch( closeScheduleDialog() )
    }
});

const margeProps = ( stateProps, dispatchProps ) => ({
    ...stateProps,
    ...dispatchProps,
    deleteSchedule: () => {
        const { id } = stateProps.currentSchedule.item;
        dispatchProps.deleteSchedule( id )
    }
});

export default connect( mapStateToProps, mapDispatchToProps, margeProps )( CurrentScheduleDialog );