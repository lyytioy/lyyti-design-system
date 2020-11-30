import React, { FunctionComponent } from 'react';
import {FormControl as MuiFormControl, FormControlProps as MuiFormControlProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
}));

export interface FormControlProps extends MuiFormControlProps {}

const FormControl: FunctionComponent<FormControlProps> = props => {
    const classes = useStyles();

    return (
        <MuiFormControl {...props} classes={{ root: classes.root }} />
    )
};

export default FormControl;