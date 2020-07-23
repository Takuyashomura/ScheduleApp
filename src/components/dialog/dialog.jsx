import React from 'react';
import { 
    Dialog, 
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Grid,
    IconButton,
     } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import {  AccessTime, Close, NotesOutlined } from '@material-ui/icons';
import './dialog.css';

const spacer = { margin: "4px 0"};

const AddScheduleDialog = ({ schedule: { form: { dayOff, comment, date },  isDialogOpen }, closeDialog, setSchedule, saveSchedule }) => {
    return (
        <Dialog open={ isDialogOpen } onClose={ () => closeDialog() } maxWidth="xs" fullWidth >
            <DialogActions>
                <div className="closeButton">
                    <IconButton onClick={ closeDialog } size="small">
                        <Close/>
                    </IconButton>
                </div>
            </DialogActions>
            <DialogContent>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <AccessTime/>
                    </Grid>
                    <Grid item xs={10}>
                        <DatePicker
                        value={ date }
                        onChange={ d => setSchedule({ date: d })}
                        variant="inline"
                        format="YYYY年M月D日"
                        animateYearScrolling
                        disableToolbar
                        fullWidth
                        style={spacer}
                    />
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="center" justify="space-between">
                    <Grid item>
                        <NotesOutlined/>
                    </Grid>
                    <Grid item xs={10} >
                        <TextField 
                            style={ spacer } 
                            fullWidth
                            placeholder="コメント"
                            value={ comment } 
                            onChange={ e => setSchedule({ comment: e.target.value })}
                            />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="outlined" onClick={ saveSchedule }>
                    保存
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default AddScheduleDialog;