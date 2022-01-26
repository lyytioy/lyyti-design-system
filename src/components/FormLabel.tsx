import { FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps } from '@mui/material';

export type FormLabelProps = MuiFormLabelProps;

const FormLabel = (props: FormLabelProps): JSX.Element => {
  return <MuiFormLabel {...props} />;
};

export default FormLabel;
