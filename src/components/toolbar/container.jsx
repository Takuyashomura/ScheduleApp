import Toolbar from './toolbar';
import { getNextMonth, getPreviousMonth } from '../../services/calendar';
import { calendarSetMonth } from '../../redux/calendar/calendar_actions';
import { connect } from 'react-redux';
import { addUserName, addResetUserName } from '../../redux/addUser/addUser_actions';
import { userNameList, setActiveUser } from '../../redux/users/users_actions';

const mapStateToProps = state => ({ calendar: state.calendar, user: state.addUserName, usersName: state.usersName });

const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch( calendarSetMonth( month ) )
    },
    setUser: value => {
        dispatch( addUserName( value ) )
    },
    setActiveUser: value => {
        dispatch( setActiveUser( value ) )
    },
    saveUser: user => {
        dispatch( userNameList( user ) )
        dispatch( addResetUserName() )
    }
});

const mergeProps = ( stateProps, dispatchProps ) => ({
    ...stateProps,
    ...dispatchProps,
    setNextMonth: () => {
        const nextMonth = getNextMonth( stateProps.calendar );
        dispatchProps.setMonth( nextMonth );
    },
    setPreviousMonth: () => {
        const previousMonth = getPreviousMonth( stateProps.calendar );
        dispatchProps.setMonth( previousMonth );
    },
    saveUser: () => {
        const { user: { form: user } } = stateProps;
        dispatchProps.saveUser( user );
    }
});

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Toolbar);