import { FormGroup as MuiFormGroup, FormGroupProps as MuiFormGroupProps } from '@mui/material';

export type FormGroupProps = MuiFormGroupProps;

const FormGroup = (props: FormGroupProps): JSX.Element => {
  return <MuiFormGroup {...props} />;
};

export default FormGroup;
