import React, { FunctionComponent } from 'react';
import {Stepper as MuiStepper, StepperProps as MuiStepperProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
    root: {
        backgroundColor: 'transparent',
        '& .MuiStep-horizontal': {
            paddingLeft: '32px',
            paddingRight: '32px',
        },
        '& .MuiStepIcon-root': {
            color: '#FFF',
            border: '2px solid',
            borderColor: theme.palette.action.disabledBackground,
            borderRadius: '50%',
            height: '32px',
            width: '32px',
        },
        '& .MuiStepIcon-text': {
            fill: theme.palette.action.disabledBackground,
            fontWeight: 'bold'
        },
        '& .MuiStepIcon-root.MuiStepIcon-completed': {
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            borderRadius: '50%',
            fill: '#FFF',
            background: theme.palette.secondary.main
        },
        '& .MuiStepIcon-root.MuiStepIcon-active': {
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            borderRadius: '50%',
            background: theme.palette.secondary.main
        },
        '& .MuiStepIcon-root.MuiStepIcon-active .MuiStepIcon-text': {
            fill: '#FFF'
        },
        '& .MuiStepLabel-label.MuiStepLabel-completed': {
            color: theme.palette.secondary.main
        },
        '& .MuiStepLabel-label.MuiStepLabel-active': {
            color: theme.palette.secondary.main
        },
        '& .MuiStepLabel-label': {
            fontSize: '15px',
            color: theme.palette.action.disabledBackground
        },
        '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
            marginTop: '8px'
        },
        '& .MuiStepLabel-iconContainer': {
            boxSizing: 'border-box'
        }
    },
}));

export type OrientationTypes =
  | "horizontal";

export type StepperProps = MuiStepperProps & { orientation: OrientationTypes };

const Stepper: FunctionComponent<StepperProps> = props => {
    const classes = useStyles();

    return (
        <MuiStepper {...props} classes={{ root: classes.root }} />
    )
};

export default Stepper;