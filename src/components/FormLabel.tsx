import React, { FunctionComponent } from 'react';
import { FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps } from '@material-ui/core';

export type FormLabelProps = MuiFormLabelProps;

const FormLabel: FunctionComponent<FormLabelProps> = (props) => {
  return <MuiFormLabel {...props} />;
};

export default FormLabel;
