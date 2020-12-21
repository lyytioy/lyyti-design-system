import React, { FunctionComponent } from 'react';
import {StepLabel as MuiStepLabel, StepLabelProps as MuiStepLabelProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
    root: {
        '& .MuiStepLabel-label.MuiStepLabel-completed': {
            color: theme.palette.secondary.main
        },
        '& .MuiStepLabel-label.MuiStepLabel-active': {
            color: theme.palette.secondary.main
        },
        '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
            marginTop: '8px'
        }
    },
    label: {
        fontSize: '15px',
        color: theme.palette.action.disabledBackground
    },
}));

export interface StepLabelProps extends MuiStepLabelProps {}

const StepLabel: FunctionComponent<StepLabelProps> = props => {
    const classes = useStyles();

    return (
        <MuiStepLabel {...props} classes={{ root: classes.root, label: classes.label }} />
    )
};

export default StepLabel;