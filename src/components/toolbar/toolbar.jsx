import React,{ useEffect, useCallback } from 'react';
import { Typography, Toolbar, IconButton, TextField, Button, Tooltip, Radio, RadioGroup } from '@material-ui/core';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import './toolbar.css';

const spacer = { margin: "0 10px" };

const ToolBar = ({ user: {form: { name }},
                calendar,
                setNextMonth,
                setPreviousMonth,
                setUser,
                saveUser,
                usersName,
                fetchUsers,
                setActiveUser,
                openDialog,}) => {
////////////////共有者名リストを取得///////////
    const fetchUser = useCallback(() => {
        fetchUsers();
    }, [fetchUsers])
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);
/////////////////////////////////////////////
let userLength = usersName.users.length;
let addUserButton = true;
if( userLength === 2 ){
    addUserButton = false;
}

let deleteButton = true
if( usersName.activeUser !== 'sample' ){
    deleteButton = false
}
    return(
        <Toolbar>
            <Typography color="textSecondary" variant="h5" component="h1">
                スケジュールアプリ
            </Typography>
        <Tooltip title="前の月">
            <IconButton size="small" onClick={ setPreviousMonth }>
                <ArrowBackIos/>
            </IconButton>
        </Tooltip>
            <Typography color="textSecondary" variant="h5" component="h2">
                { calendar.year }年{ calendar.month }月
            </Typography>
        <Tooltip title="次の月">
            <IconButton size="small" onClick={ setNextMonth }>
                <ArrowForwardIos/>
            </IconButton>
        </Tooltip>
        <Button 
            disabled={ addUserButton }
            color="primary" 
            variant="outlined" 
            onClick={ saveUser }>
            ユーザーを追加
        </Button>
        <TextField
            style={ spacer }
            placeholder="名前を入力(3名まで)"
            value={ name }
            onChange={ e => setUser({ name: e.target.value })}
            >
        </TextField>
        <RadioGroup>
            <ul className="userList_container">
                { usersName.users.map(user => (
                    <li key={ user.id } className="userList">
                        <Typography color="textSecondary" style={spacer} variant="h5" component="h3">
                            { user.name }
                        </Typography>
                        <Radio 
                        value = { user.name }
                        id = { `${user.id}` }
                        onChange={e => setActiveUser({ user: e.target.value, id: e.target.id })}/>
                    </li>
                ))}
            </ul>
        </RadioGroup>
        <Button 
            disabled={ deleteButton }
            color="primary"
            variant="outlined"
            onClick={ openDialog }
            >ユーザーを削除</Button>
        </Toolbar>
    )
};

export default ToolBar;