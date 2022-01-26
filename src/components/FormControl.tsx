import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
} from '@mui/material';

export type FormControlProps = MuiFormControlProps;

const FormControl = (props: FormControlProps): JSX.Element => {
  return <MuiFormControl {...props} />;
};

export default FormControl;
