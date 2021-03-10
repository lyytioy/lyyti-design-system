import { FunctionComponent } from 'react';
import { FormGroup as MuiFormGroup, FormGroupProps as MuiFormGroupProps } from '@material-ui/core';

export type FormGroupProps = MuiFormGroupProps;

const FormGroup: FunctionComponent<FormGroupProps> = (props) => {
  return <MuiFormGroup {...props} />;
};

export default FormGroup;
