import { FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps } from '@material-ui/core';

export type FormLabelProps = MuiFormLabelProps;

const FormLabel = (props: FormLabelProps): JSX.Element => {
  return <MuiFormLabel {...props} />;
};

export default FormLabel;
