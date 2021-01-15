import React, { FunctionComponent } from 'react';
import {FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps} from '@material-ui/core';

export interface FormLabelProps extends MuiFormLabelProps {}

const FormLabel: FunctionComponent<FormLabelProps> = props => {
    return (
        <MuiFormLabel {...props} />
    )
};

export default FormLabel;