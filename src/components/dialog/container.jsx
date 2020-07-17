import AddScheduleDialog from './dialog.jsx';
import { addScheduleCloseDialog } from '../../redux/addSchedule/addSchedule_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ schedule: state.addSchedule });

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch( addScheduleCloseDialog() )
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddScheduleDialog);

