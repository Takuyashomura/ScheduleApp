import Toolbar from './toolbar';
import { getNextMonth, getPreviousMonth } from '../../services/calendar';
import { calendarSetMonth } from '../../redux/calendar/calendar_actions';
import { connect } from 'react-redux';
import { addUserName, addResetUserName } from '../../redux/addUser/addUser_actions';
import { setActiveUser, openDeleteUserDialog, closeDeleteUserDialog } from '../../redux/users/users_actions';
import { asyncAddUserName, asyncDeleteUserName } from '../../redux/users/effects';
import { asyncFetchNameList } from '../../redux/users/effects';

const mapStateToProps = state => ({ calendar: state.calendar, user: state.addUserName, usersName: state.usersName});

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
    fetchUsers: () => {
        dispatch( asyncFetchNameList() );
    },
    deleteUser: id => {
        dispatch( asyncDeleteUserName( id ) );
    },
    saveUser: user => {
        dispatch( asyncAddUserName( user ) )
        dispatch( addResetUserName() )
    },
    openDialog: () => {
        dispatch( openDeleteUserDialog() )
    },
    closeDialog: () => {
        dispatch( closeDeleteUserDialog() )
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
    deleteUser: () => {
        const { id } = stateProps.usersName.activeUser.id;
        dispatchProps.deleteUser( id );
    },
    saveUser: () => {
        const { user: { form: user } } = stateProps;
        dispatchProps.saveUser( user );
    }
});

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Toolbar);