import React, { FunctionComponent } from 'react';
import {FormControlLabel as MuiFormControlLabel, FormControlLabelProps as MuiFormControlLabelProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
    root: {
        color: theme.palette.grey[400],
        letterSpacing: '0.15px'
    },
    label: {
        '&$disabled': {
            color: '#B8BCBF'
        }
    },
    disabled: {}
}));

export interface FormControlLabelProps extends MuiFormControlLabelProps {}

const FormControlLabel: FunctionComponent<FormControlLabelProps> = props => {
    const classes = useStyles();

    return (
        <MuiFormControlLabel {...props} classes={{ root: classes.root, label: classes.label, disabled: classes.disabled}} />
    )
};

export default FormControlLabel;