import { FormGroup as MuiFormGroup, FormGroupProps as MuiFormGroupProps } from '@material-ui/core';

export type FormGroupProps = MuiFormGroupProps;

const FormGroup = (props: FormGroupProps): JSX.Element => {
  return <MuiFormGroup {...props} />;
};

export default FormGroup;
