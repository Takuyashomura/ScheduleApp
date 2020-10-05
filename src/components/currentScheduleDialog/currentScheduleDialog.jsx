import React from 'react';
import './currentScheduleDialog.css';
import { Dialog, DialogContent ,IconButton, Grid, Typography, Tooltip } from '@material-ui/core';
import { Textsms, Face ,Close, DeleteOutlineOutlined } from '@material-ui/icons';

const spacer = ( top, bottom ) => ({
    margin:`${top}px 0 ${bottom}px 0`
});
const CurrentScheduleDialog = ({ currentSchedule:{ isDialogOpen, item }, closeDialog, deleteSchedule  }) => {

    return (
        <Dialog open={ isDialogOpen } maxWidth="xs" fullWidth >
            <div className="closeButton">
                <Tooltip title="コメントを削除">
                    <IconButton onClick={ deleteSchedule } size="small">
                        <DeleteOutlineOutlined/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="閉じる">
                    <IconButton onClick={ closeDialog } size="small">
                        <Close/>
                    </IconButton>
                </Tooltip>
            </div>
        <DialogContent>
        {item &&(
            <>
            <div>
                <Grid container spacing={1} alignItems="center" justify="space-between" style={spacer(0, 15)}>
                    <Grid item>
                        <Face/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h5" component="h2">
                            { item.name }
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between" style={spacer(0, 0)}>
                    <Grid item>
                        <Textsms/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h5" component="h2">
                            { item.comment }
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </>
        )}
        </DialogContent>
        </Dialog>
        
    )
}

export default CurrentScheduleDialog;