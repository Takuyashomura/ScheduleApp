import React from 'react';
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
                setActiveUser}) => {

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
        <Typography color="textSecondary" variant="h5" component="h1">
        </Typography>
        <Button color="primary" variant="outlined" onClick={ saveUser }>
            共有者を追加
        </Button>
        <TextField
            style={ spacer }
            placeholder="名前を入力"
            value={ name }
            onChange={ e => setUser({name: e.target.value })}
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
                        value={ user.name }
                        onChange={e => setActiveUser({activeUser: e.target.value} )}/>
                    </li>
                ))}
            </ul>
        </RadioGroup>
        </Toolbar>
    )
};

export default ToolBar;