import React, { FunctionComponent } from 'react';
import {StepConnector as MuiStepConnector, StepConnectorProps as MuiStepConnectorProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
    root: {
    },
    active: {
        '& $line': {
            borderColor: theme.palette.secondary.main
        }
    },
    completed: {
        '& $line': {
            borderColor: theme.palette.secondary.main
        }
    },
    line: {
        border: '1px solid',
        color: theme.palette.action.disabledBackground
    },
    alternativeLabel: {
        top: '16px',
        left: 'calc(-50% + 35px)',
        right: 'calc(50% + 35px)'
    }
}));

export interface StepConnectorProps extends MuiStepConnectorProps {}

const StepConnector: FunctionComponent<StepConnectorProps> = props => {
    const classes = useStyles();

    return (
        <MuiStepConnector {...props} classes={{ root: classes.root, active: classes.active, alternativeLabel: classes.alternativeLabel, completed: classes.completed, line: classes.line }} />
    )
};

export default StepConnector;