import React, { FunctionComponent } from 'react';
import {FormControlLabel as MuiFormControlLabel, FormControlLabelProps as MuiFormControlLabelProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
}));

export interface FormControlLabelProps extends MuiFormControlLabelProps {}

const FormControlLabel: FunctionComponent<FormControlLabelProps> = ({ ...props }) => {
    const classes = useStyles();

    return (
        <MuiFormControlLabel {...props} classes={{ root: classes.root }} />
    )
};

export default FormControlLabel;