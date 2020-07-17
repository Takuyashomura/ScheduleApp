import React from 'react';
import { Typography, Toolbar, IconButton } from '@material-ui/core';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';


const ToolBar = ({ setNextMonth, setPreviousMonth }) => {

    return(
        <Toolbar>
            <Typography color="textSecondary" variant="h5" component="h1">
                スケジュールアプリ
            </Typography>
        <IconButton size="small" onClick={ setPreviousMonth }>
            <ArrowBackIos/>
        </IconButton>
        <IconButton size="small" onClick={ setNextMonth }>
            <ArrowForwardIos/>
        </IconButton>
        <Typography color="textSecondary" variant="h5" component="h1">
        </Typography>
        </Toolbar>
    )
};

export default ToolBar;