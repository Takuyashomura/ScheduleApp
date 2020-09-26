import { connect } from 'react-redux';
import { closeDeleteUserDialog } from '../../redux/users/users_actions';
import { asyncDeleteUserName } from '../../redux/users/effects';
import DeleteUserDialog from './deleteUserDialog.jsx';

const mapStateToProps = state => ({usersName: state.usersName });

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch( closeDeleteUserDialog() )
    },

    deleteUser: id => {
        dispatch( asyncDeleteUserName( id ) )
        dispatch( closeDeleteUserDialog() )
    }
});

const mergeProps = ( stateProps, dispatchProps ) => ({
    ...stateProps,
    ...dispatchProps,
    deleteUser: () => {
        const { id } = stateProps.usersName.activeUser
        dispatchProps.deleteUser( id )
    }

});

export default connect( mapStateToProps, mapDispatchToProps, mergeProps )( DeleteUserDialog );
