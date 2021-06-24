import TextField, { TextFieldProps } from './TextField';

export type SelectProps = TextFieldProps;

const Select = (props: SelectProps): JSX.Element => {
  return <TextField select {...props} />;
};

export default Select;
