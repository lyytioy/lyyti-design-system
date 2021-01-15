import React, { FunctionComponent } from 'react';
import {FormGroup as MuiFormGroup, FormGroupProps as MuiFormGroupProps} from '@material-ui/core';

export interface FormGroupProps extends MuiFormGroupProps {}

const FormGroup: FunctionComponent<FormGroupProps> = props => {
    return (
        <MuiFormGroup {...props}/>
    )
};

export default FormGroup;