import React, { FunctionComponent } from 'react';
import {FormGroup as MuiFormGroup, FormGroupProps as MuiFormGroupProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
}));

export interface FormGroupProps extends MuiFormGroupProps {}

const FormGroup: FunctionComponent<FormGroupProps> = ({ ...props }) => {
    const classes = useStyles();

    return (
        <MuiFormGroup {...props} classes={{ root: classes.root }} />
    )
};

export default FormGroup;