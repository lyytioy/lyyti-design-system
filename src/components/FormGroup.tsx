import { FormGroup as MuiFormGroup, FormGroupProps as MuiFormGroupProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type FormGroupProps = MuiFormGroupProps;

const FormGroup = (props: FormGroupProps, ref: Ref<unknown>): JSX.Element => {
  return <MuiFormGroup ref={ref} {...props} />;
};

export default forwardRef(FormGroup);
