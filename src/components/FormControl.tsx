import React, { FunctionComponent } from 'react';
import {FormControl as MuiFormControl, FormControlProps as MuiFormControlProps} from '@material-ui/core';

export interface FormControlProps extends MuiFormControlProps {}

const FormControl: FunctionComponent<FormControlProps> = props => {
    return (
        <MuiFormControl {...props} />
    )
};

export default FormControl;