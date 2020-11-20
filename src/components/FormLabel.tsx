import React, { FunctionComponent } from 'react';
import {FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
}));

export interface FormLabelProps extends MuiFormLabelProps {}

const FormLabel: FunctionComponent<FormLabelProps> = ({ ...props }) => {
    const classes = useStyles();

    return (
        <MuiFormLabel {...props} classes={{ root: classes.root }} />
    )
};

export default FormLabel;