import { get, post, remove } from '../../services/api';
import { addUserNameList, deleteUserNameList ,asyncUserNameListFailur } from './users_actions';

export const asyncFetchNameList = () => async dispatch => {
    try{
    const result = await get('namesApi/names');

        result.forEach(name => {
            dispatch(addUserNameList( name ));     
        });

    } catch (error) {
        dispatch(asyncUserNameListFailur(error))
    }
};

export const asyncAddUserName = name => async dispatch => {
    const addName = { ...name };
    try{
    const result = await post('namesApi/names', addName);
    dispatch(addUserNameList( result ));

    } catch (error) {
        dispatch(asyncUserNameListFailur( error ))
    }
};

export const asyncDeleteUserName = id => async ( dispatch, getState ) => {
    const parsedId = parseInt( id, 10);
    const currentUsers = getState().usersName.users;
    try{
        await remove(`namesApi/names/${ parsedId }`);
    const newUserList = currentUsers.filter(name => name.id !== parsedId );

        dispatch(deleteUserNameList( newUserList ));
    } catch (error) {
        dispatch(asyncUserNameListFailur( error ))
    }

}