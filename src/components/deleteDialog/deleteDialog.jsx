import React from 'react';
import {
    Typography,
    Dialog,
    Button
} from '@material-ui/core';

const spacer = { margin:" 10px 20px "}
const centerSpacer = { margin: "0 auto"}

const DeleteDialog = ({ usersName: { activeUser, isOpenDeleteUserDialog },  closeDialog, deleteUser }) => {
    return (
    <Dialog open={ isOpenDeleteUserDialog }  maxWidth="xs" fullWidth >
        <Typography style={ centerSpacer } color="textPrimary" variant="h5" component="h3">
            { activeUser.user }
        </Typography>
        <p style={ centerSpacer } >ユーザーを削除してもよろしいですか？</p>
        <Button style={ spacer } color="primary" variant="outlined" onClick={ deleteUser } >はい</Button>
        <Button style={ spacer } color="primary" variant="outlined" onClick={ closeDialog } >いいえ</Button>
    </Dialog>
    )
}

export default DeleteDialog;