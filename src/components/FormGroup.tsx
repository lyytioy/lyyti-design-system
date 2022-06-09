import { FormGroup as MuiFormGroup, FormGroupProps as MuiFormGroupProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface FormGroupProps extends MuiFormGroupProps{
  ref?: Ref<HTMLDivElement>
};

const FormGroup = (props: FormGroupProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return <MuiFormGroup ref={ref} {...props} />;
};

export default forwardRef(FormGroup);
